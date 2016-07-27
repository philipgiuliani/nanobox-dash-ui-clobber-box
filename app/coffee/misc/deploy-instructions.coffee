deployInstructions = require 'jade/deploy-instructions'

module.exports = class DeployInstructions

  constructor: ($el, appName) ->
    @$node = $ deployInstructions( {} )
    $el.append @$node
    castShadows @$node

    $(".main", @$node).on 'click', ()=> @showInstructions()
    $(".close-btn", @$node).on 'click', ()=> @hideInstructions()

  showInstructions : ()->
    @$node.addClass "instructions"

  hideInstructions : ()->
    @$node.removeClass "instructions"