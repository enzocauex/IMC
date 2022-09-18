import { Modal } from './modal.js'

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// quando a arrow function recebe apenas um argumento, ela pode ser escrita sem os parênteses
form.onsubmit = event => { 
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError) {
        console.log('mostrar o alerta de erro')
        return;
    }

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

//functions
function notNumber(value) {
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }