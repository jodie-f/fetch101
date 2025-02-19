/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

// Q2
async function showList(elem, url) {
  const response = await fetch(url);
  const data = await response.json();

  data.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    elem.appendChild(li);
  });
}

// Q3
async function startShowingMessage(elem, url) {
setInterval(async function() {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
  }, 1000);
}

// Q4
async function handleError(elem, url) {
  const response = await fetch(url);
  if (response.ok) {
    const content = await response.text();
    elem.textContent = content;
    } else {
      elem.textContent = "OH DEAR";
    }
}

// Q5
async function drawBox(canvas, url) {
  const canvasContext = canvas.getContext('2d');

  async function updateBox() {
    const response = await fetch(url);
    const {x, y} = await response.json();

    canvasContext.clearRect(0,0, canvas.width, canvas.height);
    canvasContext.fillRect(x, y, 10, 10);

  }
  setInterval(updateBox, 1000);
}