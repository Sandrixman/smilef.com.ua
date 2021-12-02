$(function () {

    // слайдер
    $('.room-page__sliderbig').slick({
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: ".room-page__slider",
        prevArrow: '<button class="room-page__slider-btn room-page__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="room-page__slider-btn room-page__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.room-page__slider').slick({
        dots: false,
        arrows: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".room-page__sliderbig",
        prevArrow: '<button class="room-page__slider-btn room-page__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="room-page__slider-btn room-page__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // перемикання слайдеру по кліку
    $(".room-page__slider .room-page__slider-item").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".room-page__slider").slick("slickGoTo", index);
    });

    $('.price-page__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="price-page__slider-btn price-page__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="price-page__slider-btn price-page__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.pool__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="price-page__slider-btn price-page__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="price-page__slider-btn price-page__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});
