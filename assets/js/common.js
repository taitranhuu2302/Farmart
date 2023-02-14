$(() => {
    const menu = $(".menu-mobile");

    function handleSlider(arrowPrev, arrowNext, slider, options) {
        $(`${slider}`).slick(options)
        $(`${arrowPrev}`).click(() => {
            $(`${slider}`).slick("slickPrev");
        })
        $(`${arrowNext}`).click(() => {
            $(`${slider}`).slick("slickNext");
        })
    }

    handleSlider("", "", ".post-listing-thumb-slider", {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button class="slick-prev arrow-left arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow-right arrow"><span class="icon-chevron-right"></span></button>',
    })
    handleSlider("", "", ".post-thumb-slider", {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button class="slick-prev arrow-left arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow-right arrow"><span class="icon-chevron-right"></span></button>',
    })

    $(".menu-mobile .nav .nav-item").on("click", function (e) {
        e.preventDefault();
        const el = $(this);
        el.find(".nav-item-button").toggleClass("active");
        el.find(".sub-menu").toggleClass("active");
    })

    $(".quantity-input").on("change", function (e) {
        let el = $(e.currentTarget);
        let price = el.parents(".product-inner").find(".price-discounted").text().split("$")[1];
        let total = el.val() * price;

        el.parents(".quantity").find(".total-text").text(total.toFixed(2));
    })

    $(".btn-quantity-decrement").click((e) => {
        e.preventDefault();

        let el = $(e.currentTarget);
        let price = el.parents(".product-inner").find(".price-discounted").text().split("$")[1];
        let input = el.siblings(".quantity-input");
        let value = parseInt(input.val());
        if (value > 1) {
            input.val(value - 1);
        }

        let total = el.parents(".quantity").find(".total-text");
        total.text((+price * +input.val()).toFixed(2));
    })

    $(".collapse").click((e) => {
        e.preventDefault();
        const el = $(e.currentTarget);
        const parent = el.parent();

        parent.siblings(".box-filter-content").slideToggle({})
        parent.siblings(".box-filter-content").toggleClass("active")
        el.empty();
        if (parent.siblings(".box-filter-content").hasClass("active")) {
            el.append("<span class='icon-plus'></span>")
        } else {
            el.append("<span class='icon-minus'></span>")
        }
    })

    handleSlider(".recent-arrow-left", ".recent-arrow-right", ".recent-content-slider", {
        infinity: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    })

    $(".btn-quantity-increment").click((e) => {
        e.preventDefault();

        let el = $(e.currentTarget);
        let price = el.parents(".product-inner").find(".price-discounted").text().split("$")[1];
        let input = el.siblings(".quantity-input");
        let value = parseInt(input.val());
        input.val(value + 1);

        let total = el.parents(".quantity").find(".total-text");

        total.text((price * +input.val()).toFixed(2));
    })


    $(".menu-mobile .icon-go-back").click(function (e) {
        e.preventDefault();
        menu.removeClass("active");
        $('.overlay').removeClass("active");
    })

    const onMenuClose = (e) => {
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass("active");
            $('.overlay').removeClass("active");
        }
    }

    $(".btn-menu-mobile").click(function (e) {
        e.preventDefault();

        menu.toggleClass("active").promise().done(function () {
            if (menu.hasClass("active")) {
                $(document).on("mouseup", onMenuClose);
            } else {
                $(document).off("mouseup", onMenuClose);
            }
        });

        if (menu.hasClass("active")) {
            $('.overlay').addClass("active");
        } else {
            $('.overlay').removeClass("active");
        }
    })

})