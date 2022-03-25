const link = document.querySelector('#link');

function linkClickHandler(event){
  event.preventDefault();
  link.textContent = prompt('Введите название ссылки', 'писать тут');
}

link.addEventListener('click', linkClickHandler);