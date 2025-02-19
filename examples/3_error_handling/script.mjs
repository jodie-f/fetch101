async function fetchData(url) {
  const response = await fetch(url);
  const dt = document.querySelector('dynamicText1');
  if (response.ok) {
    const text = await response.text();
    // pull the text out of it
    dt.textContent = text;
    // setting the const
    dt.classList.remove('error'); 
    // removing the error
  } else { // when trying to fetch a non-existant file
    dt.textContent = `${response.status} ${response.statusText} when loading ${url}`;
    dt.classList.add('error');
  }
}


function pageLoaded() {
  const fetchIt = document.querySelector('#fetchit');
  const fetchError = document.querySelector('#fetcherror');

  // this is where anonymous functions are suddenly *really* useful
  fetchIt.addEventListener('click', () => fetchData('message.txt'));
  // without [() =>], this instantly does [fetchData]. it defines a function with no name, which then calls [fetchData]
  fetchError.addEventListener('click', () => fetchData('imaginary.file')); // This file does not exist
}

window.addEventListener('load', pageLoaded);
// begin with page loaded