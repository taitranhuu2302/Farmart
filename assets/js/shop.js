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

    handleSlider("", "", ".box-category-detail-slider", {
        dots: false,
        arrows: true,
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<button class="slick-prev arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow"><span class="icon-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    })

    $(".categories .category-item .category-link").click((e) => {
        e.preventDefault();
        const el = $(e.currentTarget);
        el.siblings(".menu-sub").slideToggle({
            start: function( ) {
                $(this).css('display', 'flex');
            }
        });
        // el.siblings(".menu-sub").css('display', 'flex')
    })
    const wrapperMinMax = $(".wrapper-input-price")[0];
    const inputMin = $($(wrapperMinMax).children()[0]).find('input');
    const inputMax = $($(wrapperMinMax).children()[1]).find('input');

    $(".slider-price").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 400,
        to: 600,
        drag_interval: true,
        min_interval: null,
        max_interval: null,
        onStart: (data) => {
            inputMin.val(+(data.from).toFixed(2))
            inputMax.val(+(data.to).toFixed(2))
        },
        onChange: (data) => {
            inputMin.val(+(data.from).toFixed(2))
            inputMax.val(+(data.to).toFixed(2))
        },
    });

    const rangerPriceInstance = $('.slider-price').data('ionRangeSlider');

    inputMin.on('change', (e) => {
        rangerPriceInstance.update({
            from: +e.target.value
        })
    })

    inputMax.on('change', (e) => {
        rangerPriceInstance.update({
            to: +e.target.value
        })
    })

    $(".recommendation-content").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    handleSlider("", "", ".box-preview-category", {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow"><span class="icon-chevron-right"></span></button>',
        responsive: [
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
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    function renderDailyOffers() {
        LIST_DAILY_OFFERS.forEach((item) => {
            $(".box-preview-daily-offers").append(html(item));
        })
    }

    renderDailyOffers();

    function renderProducts() {
        LIST_PRODUCTS.forEach((item) => {
            $(".box-result-list-product").append(htmlNotSlider(item));
        })
    }

    function renderProductsExtended() {
        LIST_PRODUCTS.forEach((item) => {
            $(".box-result-list-product").append(htmlProductExtended(item));
        })
    }

    renderProducts();

    function renderProductListing() {
        console.log("renderProductListing");
        LIST_PRODUCTS.forEach((item) => {
            $(".box-result-list-product-listing").append(htmlProductListing(item));
        })
    }

    function html(item) {
        return `<div class="product no-border">
        <div class="product-inner">
            ${(() => {
                if (item.type === "sale") {
                    return `<div class="tag sale">25%</div>`
                } else if (item.type === "new") {
                    return `<div class="tag new">New</div>`
                } else if (item.type === "out of stock") {
                    return `<div class="tag out-of-stock">Out of Stock</div>`
                } else {
                    return ``
                }
            })()}
            <a href="" class="product-thumbnail">
                <img src="${item.img}" alt="">
            </a>
            <div class="product-content">
                <p class="product-content-store"><a href="" class="hover-green"><span
                            class="icon-store"></span>
                        Farmat</a>
                </p>
                <h5 class="product-content-title"><a href="" class="hover-green">Cornboat
                        Holders</a></h5>
                <p class="product-content-unit">200g</p>
                <div class="product-content-stars">
                    <div class="flex items-center gap-2">
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                    </div>
                    <p class="size-13">(0)</p>
                </div>
                <p class="product-content-price">
                    <span class="price-discounted">$2.90</span>
                    <span class="price">$4.90</span>
                    <span class="percent-discount">$25% Off</span>
                </p>
                <div class="product-bottom">
                    <div class="quantity ">
                        <div class="warpper-quantity-input ">
                            <a class="btn-quantity-decrement">
                                <i class="fas fa-minus"></i>
                            </a>
                            <input type="number" class="quantity-input" value="1" min="1">
                            <a class="btn-quantity-increment">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                        <div class="total">
                            <span>Total:</span>
                            <span>$<span class="total-text">2.90</span></span>
                        </div>
                    </div>

                    <div class="btn-add-cart">
                        <a href="/" class="btn-add-cart-link">
                            <span class="icon-cart"></span>
                            <span class="text">Add to cart</span>
                        </a>
                    </div>
                    <div class="product-bottom-wishlist flex items-center justify-between">
                        <a href="" class="wishlist-item hover-green">
                            Wishlist
                        </a>
                        <span>|</span>
                        <a href="" class="wishlist-item hover-green">
                            Compare
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    function htmlNotSlider(item) {
        return `<div class="product not-slider no-border">
        <div class="product-inner">
            ${(() => {
                if (item.type === "sale") {
                    return `<div class="tag sale">25%</div>`
                } else if (item.type === "new") {
                    return `<div class="tag new">New</div>`
                } else if (item.type === "out of stock") {
                    return `<div class="tag out-of-stock">Out of Stock</div>`
                } else {
                    return ``
                }
            })()}
            <a href="" class="product-thumbnail">
                <img src="${item.img}" alt="">
                <div class="list-unit">
                    <span class="unit-item">200g</span>
                    <span class="unit-item">500g</span>
                    <span class="unit-item">1kg</span>
                </div>
            </a>
            <div class="product-content">
                <p class="product-content-store"><a href="" class="hover-green"><span
                            class="icon-store"></span>
                        Farmat</a>
                </p>
                <h5 class="product-content-title"><a href="" class="hover-green">Cornboat
                        Holders</a></h5>
                <p class="product-content-unit">200g</p>
                <div class="product-content-stars">
                    <div class="flex items-center gap-2">
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                    </div>
                    <p class="size-13">(0)</p>
                </div>
                <p class="product-content-price">
                    <span class="price-discounted">$2.90</span>
                    <span class="price">$4.90</span>
                    <span class="percent-discount">$25% Off</span>
                </p>
                <div class="product-bottom">
                    <div class="quantity ">
                        <div class="warpper-quantity-input ">
                            <a class="btn-quantity-decrement">
                                <i class="fas fa-minus"></i>
                            </a>
                            <input type="number" class="quantity-input" value="1" min="1">
                            <a class="btn-quantity-increment">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                        <div class="total">
                            <span>Total:</span>
                            <span>$<span class="total-text">2.90</span></span>
                        </div>
                    </div>

                    <div class="btn-add-cart">
                        <a href="/" class="btn-add-cart-link">
                            <span class="icon-cart"></span>
                            <span class="text">Add to cart</span>
                        </a>
                    </div>
                    <div class="product-bottom-wishlist flex items-center justify-between">
                        <a href="" class="wishlist-item hover-green">
                            Wishlist
                        </a>
                        <span>|</span>
                        <a href="" class="wishlist-item hover-green">
                            Compare
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }

    function htmlProductExtended(item) {
        return `<div class="product not-slider extended no-border">
        <div class="product-inner">
            ${(() => {
                if (item.type === "sale") {
                    return `<div class="tag sale">25%</div>`
                } else if (item.type === "new") {
                    return `<div class="tag new">New</div>`
                } else if (item.type === "out of stock") {
                    return `<div class="tag out-of-stock">Out of Stock</div>`
                } else {
                    return ``
                }
            })()}
            <a href="" class="product-thumbnail">
                <img src="${item.img}" alt="">
                <div class="list-unit">
                    <span class="unit-item">200g</span>
                    <span class="unit-item">500g</span>
                    <span class="unit-item">1kg</span>
                </div>
            </a>
            <div class="product-content">
                <p class="product-content-store"><a href="" class="hover-green"><span
                            class="icon-store"></span>
                        Farmat</a>
                </p>
                <h5 class="product-content-title"><a href="" class="hover-green">Cornboat
                        Holders</a></h5>
                <p class="product-content-unit">200g</p>
                <div class="product-content-stars">
                    <div class="flex items-center gap-2">
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star active"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                    </div>
                    <p class="size-13">(0)</p>
                </div>
                <p class="product-content-price">
                    <span class="price-discounted">$2.90</span>
                    <span class="price">$4.90</span>
                    <span class="percent-discount">$25% Off</span>
                </p>
                <ul class="product-extended">
                    <li class="product-extended-item">
                        <a href="">Type: Processed Food</a>
                    </li>
                    <li class="product-extended-item">
                        <a href="">MFG: Jun 6, 2019</a>
                    </li>
                    <li class="product-extended-item">
                        <a href="">LIFE: 30 days</a>
                    </li>
                </ul>
                <div class="product-bottom">
                    <div class="quantity ">
                        <div class="warpper-quantity-input ">
                            <a class="btn-quantity-decrement">
                                <i class="fas fa-minus"></i>
                            </a>
                            <input type="number" class="quantity-input" value="1" min="1">
                            <a class="btn-quantity-increment">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                        <div class="total">
                            <span>Total:</span>
                            <span>$<span class="total-text">2.90</span></span>
                        </div>
                    </div>

                    <div class="btn-add-cart">
                        <a href="/" class="btn-add-cart-link">
                            <span class="icon-cart"></span>
                            <span class="text">Add to cart</span>
                        </a>
                    </div>
                    <div class="product-bottom-wishlist flex items-center justify-between">
                        <a href="" class="wishlist-item hover-green">
                            Wishlist
                        </a>
                        <span>|</span>
                        <a href="" class="wishlist-item hover-green">
                            Compare
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }

    function htmlProductListing(item) {
        return `
        <div class="product-listing">
        <div class="product-listing-left">
            <div class="flex flex-nowrap gap-20 gap-sm-0">
                <div class="product-listing-thumbnail">
                    <a href=""><img src="${item.img}" alt=""></a>
                    <div class="tag sale">25%</div>
                    <div class="list-unit">
                        <span class="unit-item">200g</span>
                        <span class="unit-item">500g</span>
                        <span class="unit-item">1kg</span>
                    </div>
                </div>
                <div class="product-listing-info">
                    <p class="product-listing-info-store"><a href=""
                            class="hover-green"><span class="icon-store"></span>
                            Farmat</a>
                    </p>
                    <h5 class="product-listing-info-title"><a href=""
                            class="hover-green">Cornboat
                            Holders</a></h5>
                    <div class="product-listing-info-stars">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-star star active"></i>
                            <i class="fas fa-star star active"></i>
                            <i class="fas fa-star star active"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                        </div>
                        <p class="size-13">(0)</p>
                    </div>
                    <ul class="product-extended">
                        <li class="product-extended-item">
                            <a href="">Type: Processed Food</a>
                        </li>
                        <li class="product-extended-item">
                            <a href="">MFG: Jun 6, 2019</a>
                        </li>
                        <li class="product-extended-item">
                            <a href="">LIFE: 30 days</a>
                        </li>
                    </ul>
                    <div class="product-listing-mobile">
                        <p class="price">
                            <span class="price-discounted">$2.90</span>
                            <span class="price">$4.90</span>
                        </p>
                        <p class="unit">200g</p>

                        <div class="wrapper-quantity">
                            <div class="quantity">
                                <div class="warpper-quantity-input">
                                    <a class="btn-quantity-decrement">
                                        <i class="fas fa-minus"></i>
                                    </a>
                                    <input type="number" class="quantity-input" value="1" min="1">
                                    <a class="btn-quantity-increment">
                                        <i class="fas fa-plus"></i>
                                    </a>
                                </div>
                                <div class="total">
                                    <span>Total:</span>
                                    <span>$<span class="total-text">2.90</span></span>
                                </div>
                            </div>
                        </div>  

                        <div class="btn-add-cart">
                            <a href="/" class="btn-add-cart-link">
                                <span class="icon-cart"></span>
                                <span class="text">Add to cart</span>
                            </a>
                        </div>
                        <div
                            class="wishlist flex items-center justify-between">

                            <a href="" class="wishlist-item hover-green">
                                Wishlist
                            </a>
                            <span>|</span>
                            <a href="" class="wishlist-item hover-green">
                                Compare
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="wrapper-quantity">
                <div class="quantity">
                    <div class="warpper-quantity-input">
                        <a class="btn-quantity-decrement">
                            <i class="fas fa-minus"></i>
                        </a>
                        <input type="number" class="quantity-input" value="1" min="1">
                        <a class="btn-quantity-increment">
                            <i class="fas fa-plus"></i>
                        </a>
                    </div>
                    <div class="total">
                        <span>Total:</span>
                        <span>$<span class="total-text">2.90</span></span>
                    </div>
                </div>
            </div>   
        </div>
        <div class="product-listing-right">
            <p class="price">
                <span class="price-discounted">$2.90</span>
                <span class="price">$4.90</span>
            </p>
            <p class="unit">200g</p>
            <div class="btn-add-cart">
                <a href="/" class="btn-add-cart-link">
                    <span class="icon-cart"></span>
                    <span class="text">Add to cart</span>
                </a>
            </div>
            <div
                class="wishlist flex items-center justify-between">

                <a href="" class="wishlist-item hover-green">
                    Wishlist
                </a>
                <span>|</span>
                <a href="" class="wishlist-item hover-green">
                    Compare
                </a>
            </div>
        </div>
    </div>
        `
    }

    $(".show-item").click((e) => {
        e.preventDefault();
        $(".show-item").removeClass("active");
        $(e.currentTarget).addClass("active");

        $(".box-result-list-product").empty();
        $(".box-result-list-product-listing").empty();

        switch ($(".show-item.active").attr("data-type")) {
            case "default":
                renderProducts();
                break;
            case "extended":
                renderProductsExtended();
                break;
            case "listing":
                renderProductListing();
                break;
            default:
                break;
        }
    })

    handleSlider("", "", ".box-preview-daily-offers", {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev arrow"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button class="slick-next arrow"><span class="icon-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    })



    $(".btn-filter").click((e) => {
        e.preventDefault();

        $(".box-filter-mobile").toggleClass("active").promise().done(function () {
            if ($(".box-filter-mobile").hasClass("active")) {
                $(document).on("mouseup", onMenuClose);
            } else {
                $(document).off("mouseup", onMenuClose);
            }
        });
        $(".overlay-filter-mobile").toggleClass("active");
    })

    $(".box-collapse-text").click((e) => {
        e.preventDefault();

        const parent = $(e.currentTarget).parent();

        parent.siblings(".categories").toggleClass("hidden")
    })

    const onMenuClose = (e) => {
        if (!$(".box-filter-mobile").is(e.target) && $(".box-filter-mobile").has(e.target).length === 0) {
            $(".box-filter-mobile").removeClass("active");
            $('.overlay-filter-mobile').removeClass("active");
        }
    }
})

const LIST_DAILY_OFFERS = [
    {
        img: "../assets/img/fresh-food/1.jpg",
        type: "new",
    },
    {
        img: "../assets/img/fresh-food/2.jpg",
        type: "sale",
    },
    {
        img: "../assets/img/fresh-food/3.jpg",
        type: "out of stock",
    },
    {
        img: "../assets/img/fresh-food/4.jpg"
    },
    {
        img: "../assets/img/fresh-food/5.jpg"
    },
    {
        img: "../assets/img/fresh-food/6.jpg"
    },
    {
        img: "../assets/img/fresh-food/7.jpg"
    },
    {
        img: "../assets/img/fresh-food/8.jpg"
    },
]

const LIST_PRODUCTS = [
    {
        img: "../assets/img/fresh-food/1.jpg",
        type: "new",
    },
    {
        img: "../assets/img/fresh-food/2.jpg",
        type: "sale",
    },
    {
        img: "../assets/img/fresh-food/3.jpg",
        type: "out of stock",
    },
    {
        img: "../assets/img/fresh-food/4.jpg"
    },
    {
        img: "../assets/img/fresh-food/5.jpg"
    },
    {
        img: "../assets/img/fresh-food/6.jpg"
    },
    {
        img: "../assets/img/fresh-food/7.jpg"
    },
    {
        img: "../assets/img/fresh-food/8.jpg"
    },
    {
        img: "../assets/img/fresh-food/7.jpg"
    },
    {
        img: "../assets/img/fresh-food/8.jpg"
    },
    {
        img: "../assets/img/fresh-food/7.jpg"
    },
    {
        img: "../assets/img/fresh-food/8.jpg"
    },
]