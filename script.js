const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/*  Modal para estruturação de dado
    Objeto que vai orquestrar o Modal */
const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}


// quando a arrow function recebe apenas um argumento, ela pode ser escrita sem os parênteses
form.onsubmit = event => { 
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

// quando a arrow function tem apenas uma linha, pode ser escrita sem as chaves
Modal.buttonClose.onclick = () => Modal.close()

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }