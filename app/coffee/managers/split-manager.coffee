Manager = require 'managers/manager'
split = require 'jade/split'

module.exports = class SplitManager extends Manager

  constructor: ($el, @data, @isCluster, @hideCb, @componentId) ->
    console.log @data
    # @category, @clusterable
    PubSub.publish 'GET_BUNKHOUSES',
      id : @componentId
      cb : (bunkHouses)=>
        config =
          isCluster         : @isCluster
          componentId       : @componentId
          category          : @category
          clusterable       : @clusterable
          bunkHouses        : bunkHouses
          submitCb          : @onSubmit
          cancelCb          : @onCancel
          clusterShapeIs    : @data.clusterShapeIs
          clusterShapeCanBe : @data.clusterShapeCanBe
          topology          : @data.topology
        app = new nanobox.Splitter $el, config

    super()

  onSubmit : (@data) =>
    options =
      modal    : "action-confirmation-modal"
      header   : "Move Confirmation"
      content  : "Lorem Ipsum : Moving this component will take if offline for some amount of time.."
      onOpen   : ->
      onSubmit : @sendTheData
      onClose  : ->

    # load and show a modal
    nanobox.Modals.load options

  sendTheData : () =>
    @data.submitCb = @hideCb
    PubSub.publish 'SPLIT.SAVE', @data

  onCancel : () =>
    @hideCb()
