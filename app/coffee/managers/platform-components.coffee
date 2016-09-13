Manager = require 'managers/manager'
AppComponents = require 'managers/app-components'

# TODO - Rename this to PlatformServices
module.exports = class PlatformComponents extends Manager

  constructor: (@$el, platformServices, @fadeParentMethod, @resizeCb) ->
    super()

    @createComponents @$el, platformServices

  createComponents : (@$el, platformServices) ->
    @components = []
    for componentData in platformServices

      componentIds = []
      for comp in componentData.components
        componentIds.push comp.id

      data  =
        componentKind : componentData.kind
        serviceId     : componentData.id
        isSplitable   : componentData.isSplitable
        category      : componentData.category
        clusterable   : componentData.clusterable
        mode          : componentData.mode
        showAdminCb   : @showComponentAdmin
        resetViewCb   : @resetView
        componentIds  : componentIds

      component = new nanobox.PlatformComponent @$el, data
      component.setState "mini"
      component.rawData = componentData
      # Events
      @components.push component

  # New methods for adding / updating / removing components and generations
  addGeneration : (componentData, generationData) ->
    @componentManager.addGeneration componentData, generationData
  removeGeneration : (generationId) ->
    @componentManager.removeGeneration generationId
  addComponent : (componentData) ->
    @componentManager.addComponent componentData
  removeComponent : (serviceId) ->
    @componentManager.removeComponent serviceId
  updateGenerationState : (id, state) ->
    @componentManager.updateGenerationState id, state



  showComponentAdmin : (id) =>
    return if !@components?
    @viewComponentAdmin id

  viewComponentAdmin : (id) ->
    @adminingComponent = true
    @fadeParentMethod ()=>
      for component in @components
        if id == component.serviceId
          component.setState "full"
        else
          component.setState "hidden"

      # Create a component manager to handle any sub components in this platform service
      @componentManager = new AppComponents $('.bg-div', @$el), @getComponentById(id).rawData.components, @resizeCb
      @resizeCb()
    ,false, false

  resetView : (id) =>
    @adminingComponent = false
    return if !@components?
    @fadeParentMethod ()=>
      for component in @components
        component.setState "mini"
        @resizeCb()
    ,false, false

  getComponentById : (id) ->
    for component in @components
      if id == component.serviceId
        return component

  # In case the user clicks Platform while platform is still open
  secondClick : () ->
    if @adminingComponent
      @resetView();
      return true
    else
      return false

  destroy : () ->
    for component in @components
      component.destroy()
    if @componentManager?
      @componentManager.destroy()
    super()
    @components = null
