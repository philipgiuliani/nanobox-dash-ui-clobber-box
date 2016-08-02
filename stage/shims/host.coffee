AppComponent      = require './app-component'
PlatformComponent = require './platform-component'

module.exports = class Host

  @hostCount : 0

  constructor: (makeLotsOfComponents=false) ->
    @state          = "active"
    @id             = "host.#{++Host.hostCount}"
    @name           = "ec2.#{Host.hostCount}"
    @serverSpecsId  = "b1"
    @bunkhouseId    = "bunkhouse"
    @platformServices = [
      new PlatformComponent( "lb", "mesh")
      new PlatformComponent( "lg", "logger")
      new PlatformComponent( "hm", "monitor")
      new PlatformComponent( "mr", "pusher")
      new PlatformComponent( "gs", "warehouse")
    ]
    @appComponents  = []
    # @createComponents makeLotsOfComponents

  createComponents : (makeLotsOfComponents) ->
    if !makeLotsOfComponents
      @addComponent('web', 'ruby', true, true)
      @addComponent('db', 'mongo-db', false, true)
    else
      @addComponent()
      @addComponent('db',  'mongo-db', false)
      @addComponent('web', 'node', true)
      @addComponent('web', 'memcached', true)
      @addComponent('web', 'python', true)
      @addComponent('web', 'storage', true)
      @addComponent('web', 'java', true)
      @addComponent('web', 'php', true)
      @addComponent('db',  'couch-db', false)
      @addComponent('db',  'maria-db', false)
      @addComponent('db',  'postgres-db', false)
      @addComponent('db',  'redis', false)
      @addComponent('db',  'percona-db', false)
      @addComponent('web', 'default', true)
      @addComponent('db',  'default-db', false)

  addComponent : (kind, type, isHorizontallyScalable, isRedundScalable) ->
    @appComponents.push new AppComponent(kind, type, isHorizontallyScalable, isRedundScalable)

  serializeComponents : (components) ->
    ar = []
    for component in components
      ar.push component.serialize()
    ar

  serialize : () ->
    state              : @state
    id                 : @id
    name               : @name
    serverSpecsId      : @serverSpecsId
    bunkhouseId        : @bunkhouseId
    platformServices   : @serializeComponents @platformServices
    appComponents      : @serializeComponents @appComponents
