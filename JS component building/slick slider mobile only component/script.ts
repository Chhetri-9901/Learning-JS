const $jg = (globalThis as any).$;

const setSlick = function () {
    const $slider = $jg('.cmp-slick__content-wrapper');
    const $breakpoint = 769;

    if($slider.hasClass('slick-initialized')) {
        return;
    }

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
                settings: 'unslick'
            }
        ]
    })
}

window.addEventListener('load', setSlick);
window.addEventListener('resize', setSlick);