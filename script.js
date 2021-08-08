function check(value) {
  return value > 9 ? value : `0${value}`;
}

function start() {
  const estante = new Date();
  const hora = check(estante.getHours());
  const [h1, h2] = '' + hora;
  const minuto = check(estante.getMinutes());
  const [m1, m2] = '' + minuto;
  const segundo = check(estante.getSeconds());
  const [s1, s2] = '' + segundo;
  const todoArray = [h1, h2, m1, m2, s1, s2];
  const pads = document.querySelectorAll('.pad');
  let i = 0;
  for (const pad of pads) {
    pad.style.bottom = `${todoArray[i] * 73}px`;
    for (const num of pad.children) {
      if (num.textContent == todoArray[i]) {
        num.classList.add('ativo');
      } else {
        num.classList.remove('ativo');
      }
    }
    i++;
  }
}

setInterval(() => {
  start();
}, 500);
