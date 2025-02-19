async function pageLoaded() {
  // [async] needed to show it is asynchronous
  const response = await fetch('message.txt');
  const text = await response.text();
  const dt = document.querySelector('#dynamicText1');
  dt.textContent = text;
}

window.addEventListener('load', pageLoaded);
