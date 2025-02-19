// debugger;
const response = await fetch('message.txt');
// Relative URL [message.txt] ^^
// [fetch] is a promise. await is used to "wait until the promised is resolved with value" -> may outcome with an error otherwise
const text = await response.text();
// Pull the content into const
// this line is not executed until line 1's promise has been fufilled. There are two [await]'s because it waits for everything from line 1 ???? bro i don't remember what he said
const dt = document.querySelector('#dynamicText1');
dt.textContent = text;
