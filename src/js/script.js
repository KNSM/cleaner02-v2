$(document).ready(function () {

    //sliders
    $('.slider-reviews .slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 0,
        dots: true,
    });

    //sliders
    $('.slider-video-reviews .slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.slider-video-reviews .slider-arrow-prev'),
        nextArrow: $('.slider-video-reviews .slider-arrow-next'),
    });


    //modals
    $(function () {
        var ov = $('.ov'),
            modal = $('.modal'),
            modalLink = $('*[data-modal]'),
            modalClose = $('.modal__close');

        modalLink.on('click', function () {
            var dataModal = $(this).data('modal');

            $('#' + dataModal).addClass('-active');
            ov.addClass('-active -active-modal');
        });

        modalClose.on('click', function () {
            $(this).parents('.modal').removeClass('-active');
            ov.removeClass('-active -active-modal');
        });

        ov.on('click', function () {
            $(this).removeClass('-active -active-modal');
            $('.modal.-active').removeClass('-active');
            $('.aside.-active').removeClass('-active');
        });
    });


    //fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

});