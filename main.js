$(function () {
    $('.slider__items').slick({
        appendArrows: '.slider__btn',
        nextArrow: '<button type="button" class="slick-next slick-next-img"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev slick-prev-img"><i class="fas fa-chevron-left"></i></button>'
    });
    $('.slider__title').slick({
        appendArrows: '.slick-prev-img',
        vertical: true,
        nextArrow: '<button type="button" class="slick-next slick-next-text"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev slick-prev-text"><i class="fas fa-chevron-left"></i></button>'
    });
    $('.slider__text').slick({
        appendArrows: '.slick-prev-text',
        vertical: true,
        nextArrow: '<button type="button" class="slick-next slick-next-title"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev slick-prev-title"><i class="fas fa-chevron-left"></i></button>'
    });

    document.querySelector('.slick-next-img').appendChild(document.querySelector('.slick-next-text'));
    document.querySelector('.slick-next-text').appendChild(document.querySelector('.slick-next-title'));
});

//burger
let burger = document.querySelector('.nav__btn');
let navList = document.querySelector('.nav ul');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    navList.classList.toggle('visible')
});
