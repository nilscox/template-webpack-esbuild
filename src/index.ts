import { main } from './main';

document.body.innerHTML = '';

const canvas = document.createElement('canvas');

document.body.appendChild(canvas);

document.body.style.margin = '0';
document.body.style.padding = '0';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = 'block';

main(canvas);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
