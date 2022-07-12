$(document).ready(function () {
    $('.owl-carousel.partner').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })


    $('.info-product-add').click(function (e) {
        e.preventDefault();
        $('.box-add-info').slideToggle();
    });
});
