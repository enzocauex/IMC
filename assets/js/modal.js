/*  Modal para estruturação de dado
Objeto que vai orquestrar o Modal */
export const Modal = {
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

// quando a arrow function tem apenas uma linha, pode ser escrita sem as chave
// quando utiliza o ON, o JavaScript sá aceita um por arquivo
Modal.buttonClose.onclick = () => Modal.close()

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}