// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #ACCODION
// =========================================================================

$('.accordion__content').hide();
$('.accordion__content').first().show();
$('.accordion__panel').first().addClass('is--open');

$('.accordion__title').click(function() {
    $('.accordion__panel').removeClass('is--open');
    $(this).parent().addClass('is--open');
    $('.accordion__content').slideUp(200);
    $(this).next('.accordion__content').slideDown(200);
});



// #TABS
// =========================================================================

$('[data-tab], .tabs__content').first().addClass('is--active');
$('.tabs__content').first().addClass('is--active');

$('[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs__content' + '[data-tab="' + thisTab + '"]');

    $('[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tab.addClass('is--active');
});




// #DROPDOWN
// =========================================================================

$('.dropdown__container').mouseenter(function() {
    $(this).addClass('is--active');
});

$('.dropdown__container').mouseleave(function() {
    $(this).removeClass('is--active');
});

$('.dropdown').mouseleave(function() {
    $(this).parent().removeClass('is--active');
});




// #ALERT NOTIFY
// =========================================================================

$('.alert--notify').click(function() {
    $(this).fadeOut(200);
});



// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas__trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal__trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is--active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is--open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is--open');
        }
    });

}



// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is--active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is--open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is--open');
    });
}



// #DOCS
// =========================================================================
