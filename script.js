// Small enhancements: year and simple reveal
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // simple reveal for .card elements
  document.querySelectorAll('.card, .hero-inner').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(()=> {
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 120 * i);
  });
});
