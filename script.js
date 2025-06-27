document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const alertBox = document.getElementById('formAlert');

  if (!name || !email || !message) {
    alertBox.classList.remove('alert-success');
    alertBox.classList.add('alert-danger');
    alertBox.textContent = 'Por favor, completa todos los campos.';
    alertBox.classList.remove('d-none');
    return;
  }

  alertBox.classList.remove('alert-danger');
  alertBox.classList.add('alert-success');
  alertBox.textContent = '¡Mensaje enviado con éxito!';
  alertBox.classList.remove('d-none');

  this.reset();

  setTimeout(() => {
    alertBox.classList.add('d-none');
  }, 3000);
});

// Animación de entrada para la sección Sobre mí
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('about-text').classList.add('visible');
    document.getElementById('about-img').classList.add('visible');
  }, 300); // pequeño retardo para suavidad
});

// Animación de entrada para las tarjetas del portafolio
window.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.fade-in-up-portfolio');
  cards.forEach(function(card, i) {
    setTimeout(function() {
      card.classList.add('visible');
    }, 400 + i * 120); // retardo escalonado
  });
});

// Animación de entrada para la sección #about
window.addEventListener('DOMContentLoaded', function () {
  var aboutSection = document.querySelector('.fade-in-section');
  if (aboutSection) {
    setTimeout(function () {
      aboutSection.classList.add('visible');
    }, 300);
  }
});
