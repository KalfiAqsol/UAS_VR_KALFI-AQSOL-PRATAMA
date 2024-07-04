document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.getElementById('splash-screen');
  const menu = document.getElementById('menu');
  const virtualTour = document.getElementById('virtual-tour');

  document.getElementById('enter-tour').addEventListener('click', () => {
    splashScreen.style.display = 'none';
    menu.style.display = 'block';
  });

  document.getElementById('start-tour').addEventListener('click', () => {
    menu.style.display = 'none';
    virtualTour.style.display = 'block';
  });

  document.getElementById('guide').addEventListener('click', () => {
    alert('Panduan penggunaan aplikasi ini...');
  });

  document.getElementById('about').addEventListener('click', () => {
    alert('Informasi tentang aplikasi ini...');
  });

  const image360 = document.getElementById('image-360');

  document.getElementById('nav1').addEventListener('click', () => {
    image360.setAttribute('src', '#sphere1');
  });

  document.getElementById('nav2').addEventListener('click', () => {
    image360.setAttribute('src', '#sphere2');
  });
});

document.getElementById('nav1').addEventListener('click', () => {
  console.log('Nav1 clicked');
  image360.setAttribute('src', '#sphere1');
});

document.getElementById('nav2').addEventListener('click', () => {
  console.log('Nav2 clicked');
  image360.setAttribute('src', '#sphere2');
});
