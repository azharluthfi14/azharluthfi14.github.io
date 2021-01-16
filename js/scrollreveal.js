const slideUp =
{
    distance: '150%',
    origin: 'bottom',
    opacity: .2,
    easing: 'ease-in-out'
};

const item_slide_up = [
    document.querySelector('.heading-skill'),
    document.querySelector('.my-text1'),
    document.querySelector('.my-text2'),
    document.querySelector('.my-text3'),

];

ScrollReveal()
    .reveal(
        item_slide_up, slideUp,
        {
            delay: 200,
            reset: true
        });
ScrollReveal().reveal('.progress-bar', { delay: 100, easing: 'ease-in', duration: 1000 });