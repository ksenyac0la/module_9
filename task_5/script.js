const text = document.querySelector('#duplicateField');
const input = document.querySelector('input');
const form = document.querySelector('form');

function inputHandler(event){
  text.textContent = event.target.value;
}

input.addEventListener('keyup', inputHandler);

function formHandler(event){
  event.preventDefault();
  text.textContent = "";
  console.log(input.value);
  input.value= "";
}

form.addEventListener('submit', formHandler)