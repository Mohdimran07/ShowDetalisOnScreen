const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    // localStorage.setItem('name', nameInput.value);
    // localStorage.setItem('email', emailInput.value);
        const obj = {
            name,
            email,
        }
        localStorage.setItem('userdetails', JSON.stringify(obj));
}