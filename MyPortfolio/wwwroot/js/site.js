// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


////////////////////////////////////
// Projects - Scrolling - Transition

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; ++i) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

///////////////////////////////////


//////////////////////////////////////////
// Page loaded - Transition - Div elements

window.onload = function () {
    var items = document.querySelectorAll('.trans');

    for (var i = 0; i < items.length; ++i) {
        items[i].classList.add('active');
    }
}

//////////////////////////////////////////


/////////////////////////
// Work - Link - Movement

$(document).ready(function () {
        // 1st Visit
        $('#visit-diata').hide();

        $('#diata').mouseover(function () {
            $('#visit-diata').show("slow");
        });

        $('#diata').mouseout(function () {
            if (!($('#diata').is(':hover'))) {
                $('#visit-diata').hide("slow");
            }
        });


        // 2nd Visit
        $('#visit-algo').hide();

        $('#algo').mouseover(function () {
            $('#visit-algo').show("slow");
        });

        $('#algo').mouseout(function () {
            if (!($('#algo').is(':hover'))) {
                $('#visit-algo').hide("slow");
            }
        });

    });

/////////////////////////


//////////////////////////////////////////////////
// Arrow keys - left_right - Movement between divs

$(window).keydown(function (e) {
    if (e.keyCode == 39 || e.keyCode == 37) {
        e.preventDefault();
    }

    var targetElement;
    // Right
    if (e.keyCode == 39) {
        if ($('#name').hasClass('scroll')) {
            $targetElement = $('#work');
        }
        else {
            $targetElement = $('.scroll').next('.main-div');
        }
    }
    // Left
    else if (e.keyCode == 37) {
        if ($('#work').hasClass('scroll')) {
            $targetElement = $('#name');
        }
        else {
            $targetElement = $('.scroll').prev('.main-div');
        }
    }

    if (!$targetElement.length) { return; }
    $('.scroll').removeClass('scroll');
    $targetElement.addClass('scroll');

    // Scroll element into view
    $('html, body').clearQueue().animate({ scrollTop: $targetElement.offset().top }, 2500);

});
