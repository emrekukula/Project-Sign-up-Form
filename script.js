const btn = document.querySelector('button');

const pwd = document.getElementById('pwd');
const confirmPwd = document.getElementById('confirm_pwd');

const error = document.querySelector('.error');
const confirmError = document.querySelector('.confirmError');

confirmPwd.addEventListener('input', (event) => {
    if (confirmPwd.value !== pwd.value ) {
        error.textContent = '*Passwords do not match!';
        confirmError.textContent = '*Passwords do not match!';

        // Gives it valid-invalid pseudo-class. It's for css styles
        pwd.setCustomValidity('Check again'); 
        confirmPwd.setCustomValidity('Check again'); 
        
    } else {
        error.textContent = '';
        confirmError.textContent = '';
        pwd.setCustomValidity(''); 
        confirmPwd.setCustomValidity(''); 
    }
})

btn.addEventListener('click', (event) => { 
    if (confirmPwd.value !== pwd.value || 
        confirmPwd.value == '' || pwd.value == '') {

        event.preventDefault();
    }
})