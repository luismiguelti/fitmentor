const elements = document.querySelectorAll('h1, span, button');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      entry.target.classList.add('opacity-100', 'translate-y-0');

      // anima apenas uma vez
      observer.unobserve(entry.target);
    } else {
      // Garante que os elementos fora da tela voltem a ficar invisíveis (opcional)
      if (entry.boundingClientRect.top > window.innerHeight) {
        entry.target.classList.add('opacity-0', 'translate-y-10');
      }
    }
  });
}, {
  threshold: 0.15
});

// define estado inicial
elements.forEach(el => {
  el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
  observer.observe(el);
});

// garante
