const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#alert')
const Prompt = document.querySelector('#prompt')



consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

Alert.addEventListener('click', () =>{
    alert('Служит для вывода сообщения');
})

Prompt.addEventListener('click', () =>{
    alert('Служит для ввода информации/сообщения');
})