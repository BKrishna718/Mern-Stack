var menuBtn = document.querySelector('.menu-toggle') || (document.querySelector('.fa-bars') && document.querySelector('.fa-bars').closest('a'));
if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.side-menu').classList.add('open');
        document.querySelector('.side-menu-overlay').classList.add('active');
    });
}

document.querySelector('.side-menu-close').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.remove('open');
    document.querySelector('.side-menu-overlay').classList.remove('active');
});

document.querySelector('.side-menu-overlay').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.remove('open');
    document.querySelector('.side-menu-overlay').classList.remove('active');
});

var slider = document.getElementById('heroSlider');
if (slider) {
    var slides = slider.querySelectorAll('.hero-slide');
    var current = 0;
    var timer;

    function showSlide(index) {
        slides[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
    }

    function nextSlide() { showSlide(current + 1); }
    function prevSlide() { showSlide(current - 1); }

    slider.querySelector('.slider-next').addEventListener('click', function() {
        nextSlide();
        resetTimer();
    });

    slider.querySelector('.slider-prev').addEventListener('click', function() {
        prevSlide();
        resetTimer();
    });

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, 5000);
    }

    timer = setInterval(nextSlide, 5000);
}
