const lamp = document.getElementById('lampadina');
const interruttore = document.getElementById('interruttore');

interruttore.addEventListener('click', () => {
  if (lamp.src.includes('img/white_lamp.png')){
    lampadina.src = 'img/yellow_lamp.png';
    interruttore.textContent = 'Spegni';
  } else{
    lampadina.src = 'img/white_lamp.png';
    interruttore.textContent = 'Accendi';
  }
});