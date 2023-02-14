$(() => {

    const renderFlashDeal = () => {
        LIST_FLAST_DEALS.forEach((item) => {
            $(".flash-content .products").append(
                `
                <div class="product ">
                <div class="product-inner">
                    <a href="/" class="product-thumbnail">
                        <img src="${item.img}" alt="">
                    </a>
                    <div class="product-content">
                        <p class="product-content-price">
                            <span class="price-discounted">$2.90</span>
                            <span class="price">$4.90</span>
                            <span class="percent-discount">$25% Off</span>
                        </p>
                        <p class="product-content-store"><a href="" class="hover-green"><span
                                    class="icon-store"></span>
                                Farmat</a>
                        </p>
                        <h5 class="product-content-title"><a href="" class="hover-green">Cornboat
                                Holders</a></h5>
                        <p class="product-content-unit">4 per pack</p>
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
                        <div class="product-content-progress">
                            <span class="progress-bar" style="width: 30%;"></span>
                        </div>
    
                        <div class="product-content-amount">
                            Sold: 0/40
                        </div>
    
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
            </div>
                `
            )
        })

    }

    const renderFreshFoods = () => {
        LIST_FRESH_FOODS.forEach((item) => {
            $("#freshFoods .fresh-list").append(html(item))
        })
    }

    const renderFoodCupboard = () => {
        LIST_FOOD_CUPBOARD.forEach((item) => {
            $("#foodCupboard .cupboard-list").append(html(item))
        })
    }
    const renderReadyMeals = () => {
        LIST_MEALS.forEach((item) => {
            $("#readyMeals .meals-list").append(html(item))
        })
    }
    const renderDrinks = () => {
        LIST_DRINK.forEach((item) => {
            $("#Drinks .drink-list").append(html(item))
        })
    }
    const renderKitchen = () => {
        LIST_KITCHEN.forEach((item) => {
            $("#Kitchen .kitchen-list").append(html(item))
        })
    }
    const renderReconmendation = () => {
        LIST_RECONMENDATION.forEach((item) => {
            const el = document.createElement("div");
            el.className = "recomendations-item grid-col-1 grid-row-3",
                item.list_item.forEach((item) => {
                    $(el).append(`
            <div class="recomendations-item-inner row">
            <a href="/" class="recomendations-item-inner-thumbnail hover-opacity">
                <img src="${item.img}" alt="">
            </a>
            <div class="recomendations-item-inner-content">
                <h5 class="recomendations-item-title">
                   <a href="/" class="hover-green">Chicken Drums Jumbo Pk</a>
                </h5>
                <p class="recomendations-item-unit">1kg</p>
                <div class="recomendations-item-price">
                    ${(() => {
                            if (item.sale === false) {
                                return `
                            <span class="price-discounted">$2.90</span>
                            <span class="price">$4.90</span>
                            <span class="percent-discount">$25% Off</span>
                            `
                            } else {
                                return `<span class="price-not-discount">$38.90</span>`
                            }
                        })()}
                </div>
            </div>
        </div>
            `)
                })
            $("#Recomendations .recomendations-content").append(el);

        })
    }

    renderFlashDeal();
    renderFreshFoods();
    renderFoodCupboard()
    renderReadyMeals();
    renderDrinks();
    renderKitchen();
    renderReconmendation();

    function html(item) {
        return `<div class="product not-slider ">
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

    function handleSlider(arrowPrev, arrowNext, slider, options) {
        $(`${slider}`).slick(options)
        $(`${arrowPrev}`).click(() => {
            $(`${slider}`).slick("slickPrev");
        })
        $(`${arrowNext}`).click(() => {
            $(`${slider}`).slick("slickNext");
        })
    }
    handleSlider(".flash-arrow-left", ".flash-arrow-right", "#flashDeals .products", {
        infinity: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
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
                }
            },
        ]
    })

    handleSlider(".banner-arrow-left", ".banner-arrow-right", ".banner-slider", {
        arrows: false,
        fade: true,
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })


    handleSlider(".fresh-arrow-left", ".fresh-arrow-right", ".fresh-images", {
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    })
    handleSlider(".recommendations-arrow-left", ".recommendations-arrow-right", ".recomendations-content", {
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
    const countDown = ({ hour, minute, second }, selector) => {
        setInterval(() => {
            $(`${selector}`).find(".count-down-hour").text(`${hour}`);
            $(`${selector}`).find(".count-down-minute").text(`${minute}`);
            $(`${selector}`).find(".count-down-second").text(`${second}`);
            second--;

            if (second < 0) {
                second = 59;
                minute--;
            }
            if (minute < 0) {
                minute = 59;
                hour--;
            }

            if (hour < 0) {
                hour = 0;
                minute = 0;
                second = 0;
                clearInterval(countDown);
            }
        }, 1000)
    }

    countDown({ hour: 10, minute: 17, second: 03 }, "#flashDeals .count-down");

})

const LIST_FLAST_DEALS = [
    {
        img: "./assets/img/flash-sale/1.jpg",
    },
    {
        img: "./assets/img/flash-sale/2.jpg",
    },
    {
        img: "./assets/img/flash-sale/3.jpg",
    },
    {
        img: "./assets/img/flash-sale/4.jpg",
    },
    {
        img: "./assets/img/flash-sale/5.jpg",
    },
    {
        img: "./assets/img/flash-sale/6.jpg",
    },
    {
        img: "./assets/img/flash-sale/7.jpg",
    },
]

const LIST_FRESH_FOODS = [
    {
        img: "./assets/img/fresh-food/1.jpg",
        type: "new",
    },
    {
        img: "./assets/img/fresh-food/2.jpg",
        type: "sale",
    },
    {
        img: "./assets/img/fresh-food/3.jpg",
        type: "out of stock",
    },
    {
        img: "./assets/img/fresh-food/4.jpg"
    },
    {
        img: "./assets/img/fresh-food/5.jpg"
    },
    {
        img: "./assets/img/fresh-food/6.jpg"
    },
    {
        img: "./assets/img/fresh-food/7.jpg"
    },
    {
        img: "./assets/img/fresh-food/8.jpg"
    },
]

const LIST_FOOD_CUPBOARD = [
    {
        img: "./assets/img/cup-board/1.jpg"
    },
    {
        img: "./assets/img/cup-board/2.jpg"
    },
    {
        img: "./assets/img/cup-board/3.jpg"
    },
    {
        img: "./assets/img/cup-board/4.jpg"
    },
    {
        img: "./assets/img/cup-board/5.jpg"
    },
    {
        img: "./assets/img/cup-board/6.jpg"
    },
    {
        img: "./assets/img/cup-board/7.jpg"
    },
    {
        img: "./assets/img/cup-board/8.jpg"
    },
]

const LIST_MEALS = [
    {
        img: "./assets/img/ready-meal/1.jpg"
    },
    {
        img: "./assets/img/ready-meal/2.jpg"
    },
    {
        img: "./assets/img/ready-meal/3.jpg"
    },
    {
        img: "./assets/img/ready-meal/4.jpg"
    },
    {
        img: "./assets/img/ready-meal/5.jpg"
    },
    {
        img: "./assets/img/ready-meal/6.jpg"
    },
    {
        img: "./assets/img/ready-meal/7.jpg"
    },
    {
        img: "./assets/img/ready-meal/8.jpg"
    },
]

const LIST_DRINK = [
    {
        img: "./assets/img/drink/1.jpg"
    },
    {
        img: "./assets/img/drink/2.jpg"
    },
    {
        img: "./assets/img/drink/3.jpg"
    },
    {
        img: "./assets/img/drink/4.jpg"
    },
    {
        img: "./assets/img/drink/5.jpg"
    },
    {
        img: "./assets/img/drink/6.jpg"
    },
    {
        img: "./assets/img/drink/7.jpg"
    },
    {
        img: "./assets/img/drink/8.jpg"
    },
]

const LIST_KITCHEN = [
    {
        img: "./assets/img/kitchen/1.jpg"
    },
    {
        img: "./assets/img/kitchen/2.jpg"
    },
    {
        img: "./assets/img/kitchen/3.jpg"
    },
    {
        img: "./assets/img/kitchen/4.jpg"
    },
    {
        img: "./assets/img/kitchen/5.jpg"
    },
    {
        img: "./assets/img/kitchen/6.jpg"
    },
    {
        img: "./assets/img/kitchen/7.jpg"
    },
    {
        img: "./assets/img/kitchen/8.jpg"
    },
]
const LIST_RECONMENDATION = [
    {
        id: 1,
        list_item: [
            {
                img: "./assets/img/recomment/1.jpg"
            },
            {
                img: "./assets/img/recomment/2.jpg"
            },
            {
                img: "./assets/img/recomment/3.jpg",
                sale: false,
            }
        ]
    },
    {
        id: 2,
        list_item: [
            {
                img: "./assets/img/recomment/4.jpg"
            },
            {
                img: "./assets/img/recomment/5.jpg"
            },
            {
                img: "./assets/img/recomment/6.jpg",
                sale: false,
            },
        ]
    },
    {
        id: 3,
        list_item: [
            {
                img: "./assets/img/recomment/7.jpg"
            },
            {
                img: "./assets/img/recomment/8.jpg",
                sale: false,
            },
            {
                img: "./assets/img/recomment/9.jpg"
            }
        ]
    },
    {
        id: 4,
        list_item: [
            {
                img: "./assets/img/recomment/1.jpg"
            },
            {
                img: "./assets/img/recomment/2.jpg"
            },
            {
                img: "./assets/img/recomment/3.jpg"
            }
        ]
    },
    {
        id: 5,
        list_item: [
            {
                img: "./assets/img/recomment/4.jpg"
            },
            {
                img: "./assets/img/recomment/5.jpg"
            },
            {
                img: "./assets/img/recomment/6.jpg"
            },
        ]
    },
    {
        id: 6,
        list_item: [
            {
                img: "./assets/img/recomment/7.jpg"
            },
            {
                img: "./assets/img/recomment/8.jpg"
            },
            {
                img: "./assets/img/recomment/9.jpg"
            }
        ]
    },
]