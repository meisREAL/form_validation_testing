// const email = document.getElementById('mail');

// email.addEventListener('input', (event) => {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("I am expecting an e-mail address!");
//         email.reportValidity();
//     } else {
//         email.setCustomValidity('');
//     }
// });

// const form = document.getElementsByTagName('form')[0];

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error');

// email.addEventListener('input', (event) => {
//     if (email.validity.valid) {
//         emailError.textContent = '';
//         emailError.className = 'error';
//     } else {
//         showError();
//     }
// });

// form.addEventListener('submit', (event) => {
//     if (!email.validity.valid) {
//         showError();
//         event.preventDefault();
//     }
// });

// function showError() {
//     if (email.validity.valueMissing) {
//         emailError.textContent = 'You need to enter e-mail address.';
//     } else if (email.validity.typeMismatch) {
//         emailError.textContent = 'Entered value need to be an e-mail address.';
//     } else if (email.validity.tooShort) {
//         emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`
//     }
//     emailError.className = 'error active';
// }

const form = document.querySelector('form');
const email = document.getElementById('mail');
const error = email.nextElementSibling;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", () => {
    const test = email.ariaValueMax.length === 0 || emailRegExp.test(email.value);
    email.className = test ? 'valid' : 'invalid';
});

email.addEventListener('input', () => {
    const test = email.value.length === 0 || emailRegExp.test(email.value);
    if (test) {
        email.className = 'valid';
        error.textContent = '';
        error.className = 'invalid'
    } else {
        email.className = 'invalid';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const test = email.value.length === 0 || emailRegExp.test(email.value);
    if (!test) {
        email.className = 'invalid';
        error.textContent = 'I expect an e-mail, darling!';
        error.className = 'error active';
    } else {
        email.className = 'Valid';
        error.textContent = '';
        error.className = 'error';
    }
});