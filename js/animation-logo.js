//on définie l'animation de scale et rotate "au clic"
const logos = document.getElementsByClassName('logo-soft');

for( let logo of logos) {
  logo.addEventListener('click', () => {
    logo.classList.add('logo-animation');
    setTimeout(() => logo.classList.remove('logo-animation'), 1000);
  })
};
