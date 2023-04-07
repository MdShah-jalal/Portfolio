let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};
  /* scroll reveal */
scrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
scrollReveal().reveal('.home-content, .heading', {origin:'top'});
scrollReveal().reveal('.home-img, .services-container, .contact form', {origin:'bottom'});



/* typed js */
const typed = new typed ('.multiple-text', {
    Strings: ['Fronted Developer','YouTuber', 'Blogger'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});
