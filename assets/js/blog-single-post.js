$(() => {
    $(".post-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinity: true,
        prevArrow: '<button class="slick-prev arrow-left arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow-right arrow"><span class="icon-chevron-right"></span></button>',
    })

    $(".relate-post-slider.single-post").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        infinity: true,
        dots: true,
        prevArrow: '<button class="slick-prev arrow-left arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow-right arrow"><span class="icon-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 1255,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,

                }
            }
        ]
    })

    $(".relate-post-slider.sidebar").slick({
        slidesToShow:3,
        slidesToScroll:3,
        arrows: false,
        infinity: true,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })
})