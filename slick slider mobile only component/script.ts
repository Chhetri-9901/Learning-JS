const $jg = (globalThis as any).$;
const $slider = $jg('.cmp-slick__content-wrapper');
const $breakpoint = 769;

$slider.slick({
    mobileFirst: true,
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    accessibility: true,
    appendArrows: '.cmp-slick__button',
    appendDots: '.cmp-slick__dots',
    responsive: [
        {
            breakpoint: $breakpoint,
            settings:'unslick'
        }
    ]
})
