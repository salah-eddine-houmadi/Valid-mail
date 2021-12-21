let btn = document.querySelector('button');
let input = document.querySelector('input');
let result = document.querySelector('#result');
btn.addEventListener('click', () => {
    let email = input.value;
    let isValid = validateEmail(email);
    if(isValid){
        result.style.background = 'green';
        result.innerText = 'Valid';
    }else {
        result.style.background = 'red';
        result.innerText = 'Invalid';
    }
})