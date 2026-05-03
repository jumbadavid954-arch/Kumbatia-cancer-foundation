// SLIDER
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);

// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// BUTTON FUNCTION
function thankYou() {
  alert("Thank you for supporting Kumbatia ❤️");
}