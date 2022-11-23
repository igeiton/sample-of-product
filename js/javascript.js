'use strict'

var block = $('.block-03-content_item')
var blockIndex = 0

var minRange = -1
var maxRange = block.length
var durationAnimate = 1000

$('button').click(function() {
    $('button').each(function() {

    clearTimeout(sI)
    
        $(this).attr('disabled', 'disabled')
    })

    if ($(this).hasClass('next')) {
        prevSlide()
    }
    if ($(this).hasClass('prev')) {
        nextSlide()
    }
    
    $('button').each(function() {
        setTimeout(function() {

            $('button').each(function() {
                $(this).removeAttr('disabled')
            })

        }, durationAnimate)
    })
    sI = setInterval(function() {
        prevSlide()
    }, durationAnimate*3)
})

function nextSlide() {

    if ( !$(block[blockIndex]).hasClass('active') ) {
        if (blockIndex + 1 == maxRange) {
            $(block[0]).css('left', '125%')
        } else {
            $(block[blockIndex+1]).css('left', '125%')
        }
    }

    $(block[blockIndex]).animate({
        left: '125%'
    }, durationAnimate)

    if (blockIndex - 1 == minRange) {
        $(block[maxRange-1]).animate({
            left: '0'
        }, durationAnimate)
    } else {
        $(block[blockIndex-1]).animate({
            left: '0'
        }, durationAnimate)
    }

    if (blockIndex + 1 == maxRange) {
        $(block[0]).css('left', '-125%')
    } else {
        $(block[blockIndex+1]).css('left', '-125%')
    }
    
    if ($(block[blockIndex]).hasClass('active')) {
        $(block[blockIndex]).removeClass('active')
        if (blockIndex - 1 == minRange) {
            blockIndex = maxRange-1
        } else {
            blockIndex -= 1
        }
    }

    $(block[blockIndex]).addClass('active')

    if (blockIndex - 1 == minRange) {
        $(block[maxRange-1]).css('left', '-125%')
    } else {
        $(block[blockIndex-1]).css('left', '-125%')
    }
}
function prevSlide() {
    if ( !$(block[blockIndex]).hasClass('active')) {
        if (blockIndex - 1 == minRange) {
            $(block[maxRange-1]).css('left', '125%')
        } else {
            $(block[blockIndex-1]).css('left', '-125%')
        }
    }

    $(block[blockIndex]).animate({
        left: '-125%'
    }, durationAnimate)

    if (blockIndex + 1 == maxRange) {
        $(block[0]).animate({
            left: 0
        }, durationAnimate)
    } else {
        $(block[blockIndex+1]).animate({
            left:  0
        }, durationAnimate)
    }

    if (blockIndex - 1 == minRange) {
        $(block[maxRange-1]).css('left', '125%')
    } else {
        $(block[blockIndex-1]).css('left', '125%')
    }
    
    if ($(block[blockIndex]).hasClass('active')) {
        $(block[blockIndex]).removeClass('active')
        if (blockIndex + 1 == maxRange) {
            blockIndex = 0
        } else {
            blockIndex += 1
        }
    }

    $(block[blockIndex]).addClass('active')

    if (blockIndex + 1 == maxRange) {
        $(block[0]).css('left', '125%')
    } else {
        $(block[blockIndex+1]).css('left', '125%')
    }
}

var sI = setInterval(function() {
    prevSlide()
}, 2500)



var blockWidth = $(block[0]).width()
var blockHeight = $(block[0]).height()
var maximumHeight = 0
var margin = 30

$.each(block, function() {

    if ( $(this).height() > maximumHeight ) {
        maximumHeight = $(this).height()
    }

    $('.block-03-content').height(maximumHeight + margin * 2)
})



$(document).ready(function() {
    var minutes = 29
    var seconds = 60
    $('.timer-time span').text("30:00")
    var sI = setInterval(function() {
        seconds -= 1
        if (seconds == -1) {
            minutes -= 1
            seconds = 59
        }
        seconds < 10 ? $('.timer-time span').text(minutes + ":0" + seconds) : $('.timer-time span').text(minutes + ":" + seconds);
        (minutes == 0 && seconds == 0) && clearInterval(sI)
    }, 1000)
})



$('.to-order').click(function(event) {
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $('form').offset().top - ( $('form').width() / 2 )
    },  {
        duration: 500,
        easing: "linear"
    });
})

setInterval(function() {
    $('.cost-old').animate({opacity: 0.1}, 500)
    $('.cost-old').animate({opacity: 1}, 500)
}, 100)



$('.tip-text').slideUp()
$('.tip-number').slideUp()
$('.text-input input')
    .focus(function() {
        $('.tip-text').slideDown()
    })
    .blur(function() {
        $('.tip-text').slideUp()
    })
$('.phone-input input')
    .focus(function() {
        $('.tip-number').slideDown()
    })
    .blur(function() {
        $('.tip-number').slideUp()
    })