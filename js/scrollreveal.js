const slideUp =
{
    distance: '150%',
    origin: 'bottom',
    opacity: .2,
    easing: 'ease-in'
};

const fadeIn =
{
    distance: '0px',
    opacity: .3,
    easing: 'ease-in',
    duration: 900
};


const item_slide_up = [
    document.querySelector('.heading-skill'),
    document.querySelector('.my-text1'),
    document.querySelector('.my-text2'),
    document.querySelector('.my-text3'),
    document.querySelector('.btn-indigo'),
    document.querySelector('.section-title'),
    document.querySelector('.about-desc')
];

const item_fade_in = [
    document.querySelector('.about-image'),

];

ScrollReveal()
    .reveal(
        item_slide_up, slideUp,
        {
            delay: 200,
            reset: true
        }
    );

ScrollReveal()
    .reveal(
        '.progress-bar',
        {
            delay: 100,
            easing: 'ease-in',
            duration: 1000
        }
    );



ScrollReveal()
    .reveal(
        item_fade_in, fadeIn
    )