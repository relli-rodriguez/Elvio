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
