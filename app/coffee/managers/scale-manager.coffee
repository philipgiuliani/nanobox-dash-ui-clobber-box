Manager = require 'managers/manager'
Saver   = require 'saver'

module.exports = class ScaleManager extends Manager

  constructor: (@$el, currentServerSpecsIds, currentTotal, data, @hideCb) ->
    if data.serviceId?
      @hostId = data.serviceId
      if data.topology == 'cluster' && data.clusterShapeIs != 'data-single'
        @isCluster = true
        console.log "ASDF"
    else
      @bunkhouseId = data.bunkhouseId
      @hostId = data.id



    @instances = currentTotal
    @scalesHoriz = data.scalesHoriz

    scaleConfigs =
      activeServerId          : currentServerSpecsIds
      onSpecsChange           : @onSelectionChange
      onInscanceTotalChangeCb : @onInstanceTotalChange
      totalInstances          : currentTotal
      isHorizontallyScalable  : data.category != 'data' && @isCluster
      isCluster               : @isCluster

    @category     = data.category
    @scaleMachine = new nanobox.ScaleMachine @$el, scaleConfigs
    super()

  showSaver : (@$el) ->
    return if @saveVisible
    @saveVisible = true
    @saver = new Saver(@$el, @onSaveClick, @onCancel)

  onSelectionChange : (selection)=>
    @showSaver @$el

  onInstanceTotalChange : (@instances)=>
    @showSaver @$el

  onSaveClick : () =>
    options =
      modal    : "action-confirmation-modal"
      header   : "Scale Confirmation"
      content  : "Lorem Ipsum : Scaling this component will take if offline for some amount of time.."
      onOpen   : ->
      onSubmit : @saveIt
      onClose  : ->

    # load and show a modal
    nanobox.Modals.load options

  saveIt : () =>
    @saver.changeState 'saving'
    newPlans = @scaleMachine.getUserSelectedPlan()
    data =
      entityId   : @hostId
      newPlan    : newPlans
      entityType : if @isCluster then 'cluster' else 'bunkhouse'
      submitCb   : @hideCb
      category   : @category

    if !@isCluster
      data.entityId = @bunkhouseId

    PubSub.publish 'SCALE.SAVE', data

  onCancel : () =>
    @saveVisible = false
    @hideCb()
