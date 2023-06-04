const color = document.getElementsByClassName('color')[0];
// eslint-disable-next-line no-unused-vars
let color2 = document.getElementsByClassName('color')[1];
let color3 = document.getElementsByClassName('color')[2];
let color4 = document.getElementsByClassName('color')[3];

color.style.backgroundColor = 'black';
// color2.style.backgroundColor = "pink";
// color3.style.backgroundColor = "red";
// color4.style.backgroundColor = "brown";

const colorPalette = document.querySelectorAll('.color');

console.log(colorPalette);
// eslint-disable-next-line max-lines-per-function
function generateColors() {
  function saveColor() {
    const coresDosQuadrados = {
      quadrado2: (color2 = document.getElementsByClassName('color')[1].style.backgroundColor),
      quadrado3: (color3 = document.getElementsByClassName('color')[2].style.backgroundColor),
      quadrado4: (color4 = document.getElementsByClassName('color')[3].style.backgroundColor),
    };
    localStorage.setItem('colorPalette', JSON.stringify(coresDosQuadrados));
  }
  colorPalette.forEach((color) => {
    const hexCode = `#${Math.random().toString(16).substring(2, 8)}`;
    color.style.backgroundColor = hexCode;
    if (color.style.backgroundColor === hexCode) {
      generateColors();
    }
    saveColor();
  });

  if (localStorage.getItem('colorPalette') === null) {
    saveColor();
  } else {
    const colorRefresh = JSON.parse(
      localStorage.getItem('colorPalette').split(','),
    );
    document.getElementsByClassName('color')[1].style.backgroundColor = colorRefresh[1];
    document.getElementsByClassName('color')[2].style.backgroundColor = colorRefresh[2];
    document.getElementsByClassName('color')[3].style.backgroundColor = colorRefresh[3];
  }

  const blackColor = document.getElementsByClassName('color')[0];
  color.style.backgroundColor = 'black';
  blackColor.classList = 'color selected';
}

const container = document.querySelector('#pixel-board');
// const sizeE1 = document.querySelector('#generate-board');
// eslint-disable-next-line no-unused-vars
// const size = sizeE1.value;
// const colorInside = document.querySelector('.color');
const reset = document.querySelector('#clear-board');

function populate() {
  container.style.setProperty('--generateBoard', 5);

  for (let index = 0; index < 5 * 5; index += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    container.appendChild(div);
    reset.addEventListener('click', () => {
      if (div.style.backgroundColor !== 'rgb(255, 255, 255)') {
        div.style.backgroundColor = 'rgb(255, 255, 255)';
      }
    });
  }
}

generateColors();
populate();

const colorPaletteSelected = document.getElementById('color-palette');
colorPaletteSelected.addEventListener('click', (select) => {
  if (select.target.className === 'color') {
    const colorSelect = document.querySelector('.selected');
    colorSelect.classList.remove('selected');
    select.target.classList.add('selected');
  }
});

container.addEventListener('click', (paintPixel) => {
  const selectedColor = document.querySelector('.selected');
  const paint = getComputedStyle(selectedColor).backgroundColor;
  const paintedPixel = paintPixel.target;
  paintedPixel.style.backgroundColor = paint;
});
