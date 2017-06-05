$ ->
  $(document).on "click", "#button1", ->
    $('#button1').addClass 'hide'
    $('#heart').removeClass 'hide'
    $('#heart').addClass 'filterdiv'
    $('#heart').one 'webkitAnimationEnd', ->
      $('#heart').removeClass 'filterdiv'
      $('#heart').text 'click!'
      $('#heart').addClass 'hvr-bounce-in'
      $('#heart').on 'click', ->
        $('#heart').removeClass 'hvr-bounce-in'
        $('#heart').text ''
        $('#heart').addClass('animated rollOut').one 'webkitAnimationEnd', ->
          $(this).addClass 'hide'
          $(this).removeClass 'animated rollOut'
          return
        setTimeout (->
          $('#cat').removeClass 'hide'
          $('#cat').addClass('catanime').one 'webkitAnimationEnd', ->
            $(this).removeClass 'catanime'
            $(this).addClass 'animated tada'
            $('#miao').removeClass 'hide'
            $('#miao').addClass 'miaoanime'
        ), 200
