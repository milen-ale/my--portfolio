const submit = document.querySelector('.form-btn');
submit.addEventListener('click', (event) => {
  const error = document.querySelector('.err');
  const email = document.getElementById('email').value;
  const islowerCase = (str) => str === str.toLowerCase();
  if (!islowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Please submit your email in lowercase';
  }
});
