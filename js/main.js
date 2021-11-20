$(function () {

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
    $('.hamburger__btn').on('click', function () {
        $('.hamburger__wrapper').toggleClass('hamburger-active');
        $('body').toggleClass('scroll-lock');
        $('.hamburger__btn-line-top').toggleClass('top-animate');
        $('.hamburger__btn-line-mid').toggleClass('mid-animate');
        $('.hamburger__btn-line-bottom').toggleClass('bottom-animate');
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
        prevArrow: '<button class="apartments__slider-btn apartments__slider-btnprev"><img src="./img/left-arrow.svg" alt="arrow"></button> ',
        nextArrow: `<button class="apartments__slider-btn apartments__slider-btnnext"><img src="./img/right-arrow.svg" alt="arrow" ></button> `,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // анімація слайдера
    $('.apartments__slider-btnnext').click(function () {
        // $(".apartments__slider-descr").fadeOut("fast", function () {
        //     $(".apartments__slider-descr").show("slow");
        // });
        $(".apartments__slider-img").slideUp("slow", function () {
            $(".apartments__slider-img").slideDown("slow");
        });
    });

    // перемикач табів
    $('.exellence__tab').on('click', function (e) {
        e.preventDefault();

        // .siblings() - звернення до сусідів
        $($(this).siblings()).removeClass('tab-active');
        // .parent().siblings().find('div') - піднімається до батьківського блоку, далі у сусідів шукає дівки
        $($(this).parent().siblings().find('div')).removeClass('tab-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tab-content-active');
    });
});
