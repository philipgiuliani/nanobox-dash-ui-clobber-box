AppComponent      = require './app-component'
Host              = require './host'

module.exports = class HorizCluster

  @clusterCount : 0

  constructor: (totalMembers=4, totalGenerations=1) ->
    @id            = "cluster.#{HorizCluster.clusterCount}"
    @name          = "Main App"
    @state         = "active"
    @serviceType   = "ruby"
    @category      = "web"
    @clusterable   = true
    @generations   = []
    @adminPath     = "/some/path/to/admin"

    for i in [1..totalGenerations]
      generation =
        id        : "web.main.gen#{i}"
        state     : 'active'
        status    : "online" # Not used ?
        instances : []
      # if i % 2 != 0
      #   generation.state = 'provisioning'
      for i in [1..totalMembers]
        generation.instances.push
          id            : i
          hostId        : "do.#{i}"
          hostName      : "do.#{i}"
          state         : "active"
          status        : "online"
          role          : "default" # default, primary, secondary, arbiter
          serverSpecsId : "b2"
      @generations.push generation

    #
    # @appComponent  = new AppComponent() # delete
    # @instances     = []                 # delete
    # for i in [1..totalMembers]
      # @instances.push {id:"web.#{AppComponent.appComponentCount}.#{i}", hostId:"ec2.#{++Host.hostCount}", hostName:"ec2.#{Host.hostCount}"}

  serialize : () ->
    id            : @id
    uid           : @id
    state         : @state
    name          : @name
    scalesHoriz   : @scalesHoriz
    category      : @category
    clusterable   : @clusterable
    scalesRedund  : @scalesRedund
    generations   : @generations
    serviceType   : @serviceType
    adminPath     : @adminPath
    state         : 'provisioning'
