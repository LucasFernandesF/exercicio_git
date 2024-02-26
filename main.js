const form = document.getElementById('form-number');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const containerSuccessMessage = document.querySelector('.success-message');

let formEValido = false;

function validaResposta(b, a) {
    return b > a;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const successMessage = `O número B = <b>${numeroB.value}</b> é maior que o número A = <b>${numeroA.value}</b>. Formulário enviado!`;
    const errorMessage = `O número B = <b>${numeroB.value}</b> é menor que o número A = <b>${numeroA.value}</b>`;

    formEValido = validaResposta(parseInt(numeroB.value), parseInt(numeroA.value));
    if (formEValido) {
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block';

        numeroA.value = "";
        numeroB.value = "";
        numeroA.style.border = '1px solid black';
    } else {
        numeroA.style.border = '1px solid red';
        const containerErrorMessage = document.querySelector('.error-border');
        containerErrorMessage.style.display = 'none';
        containerSuccessMessage.style.display = 'none';
    }
});
