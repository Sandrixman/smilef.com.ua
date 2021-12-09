$(function () {

    // імпортування компонентів
    // hamburger
    $.get('../components/hamburger.php', data => {
        $(".hamburger").append(data);
    });
    // header
    $.get('../components/header.php', data => {
        $("header").append(data);
    });
    // footer
    $.get('../components/footer.php', data => {
        $("footer").append(data);
    });
    // table
    $.get('../components/priceTable.php', data => {
        $(".room-page__price-table").append(data);
    });

    // спливаючий хедер
    const header = $('.header');
    let scrollPrev = 0;

    $(window).scroll(function () {
        const scrolled = $(window).scrollTop();

        if (scrolled > 50 && scrolled <= 500) {
            header.addClass('out');
            header.removeClass('header-second');
        } else if (scrolled > 500 && scrolled < scrollPrev) {
            header.addClass('header-second');
            header.removeClass('out');
        } else if (scrolled > 500 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    // модалка гамбургер
    $.get('../components/hamburger.php', () => {
        $('.hamburger__btn').on('click', () => {
            $('.hamburger__wrapper').toggleClass('hamburger-active');
            $('body').toggleClass('scroll-lock');
            $('.hamburger__btn-line-top').toggleClass('top-animate');
            $('.hamburger__btn-line-mid').toggleClass('mid-animate');
            $('.hamburger__btn-line-bottom').toggleClass('bottom-animate');
        });
    });

    // scrollup
    // при нажатии на кнопку
    $('.scrollup').click(function () {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    // при прокрутке окна (window)
    $(window).scroll(function () {
        // если пользователь прокрутил страницу более чем на 400px
        if ($(this).scrollTop() > 400) {
            // то сделать кнопку scrollup видимой
            $('.scrollup').fadeIn();
        }
        // иначе скрыть кнопку scrollup
        else {
            $('.scrollup').fadeOut();
        }
    });

    // слайдери слік
    $('.welcome__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="welcome__slider-btn welcome__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="welcome__slider-btn welcome__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.apartments__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<button class="apartments__slider-btn apartments__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="apartments__slider-btn apartments__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<button class="reviews__slider-btn reviews__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="reviews__slider-btn reviews__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
    });

    $('.rooms__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="rooms__slider-btn rooms__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="rooms__slider-btn rooms__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    // анімація слайдера
    $('.apartments__slider-btnnext').click(function () {
        $(".apartments__slider-descr").fadeOut("normal", function () {
            $(".apartments__slider-descr").fadeIn("normal");
        });
        $(".apartments__slider-img").fadeOut("normal", function () {
            $(".apartments__slider-img").fadeIn("normal");
        });
        $(".apartments__slider-boxes").fadeOut("normal", function () {
            $(".apartments__slider-boxes").fadeIn("normal");
        });
    });
    $('.apartments__slider-btnprev').click(function () {
        $(".apartments__slider-descr").hide("normal", function () {
            $(".apartments__slider-descr").show("normal");
        });
        $(".apartments__slider-img").hide("normal", function () {
            $(".apartments__slider-img").show("normal");
        });
        $(".apartments__slider-boxes").hide("normal", function () {
            $(".apartments__slider-boxes").show("normal");
        });
    });

    // перемикач табів
    $('.exellence__tab').on('click', function (e) {
        e.preventDefault();

        // .siblings() - звернення до сусідів
        $($(this).siblings()).removeClass('tab-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).siblings().fadeOut(200);
        $($(this).attr('href')).delay(200).fadeIn(200);
    });

});
