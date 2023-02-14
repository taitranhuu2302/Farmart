$(() => {
    function handleSlider(arrowPrev, arrowNext, slider, options) {
        $(`${slider}`).slick(options)
        $(`${arrowPrev}`).click(() => {
            $(`${slider}`).slick("slickPrev");
        })
        $(`${arrowNext}`).click(() => {
            $(`${slider}`).slick("slickNext");
        })
    }

    handleSlider(".banner-arrow-left", ".banner-arrow-right", ".banner-list", {
        dots: false,
        arrows: false,
        infinity: true,
    })

    handleSlider("", "", ".box-favourited", {
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<button class="slick-prev arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow"><span class="icon-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
        ]
    })

    handleSlider("", "", ".box-categories-slider", {
        dots: false,
        arrows: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow: '<button class="slick-prev arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow"><span class="icon-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            }
        ]
    })
})