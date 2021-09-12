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

    // let Data = new Array();
    // Data = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    // Data.push ({
    //     'name' : name,
    //     'email' : email
    // })

    // localStorage.setItem('name', nameInput.value);
    // localStorage.setItem('email', emailInput.value);
        const obj = {
            name,
            email,
        }
        localStorage.setItem(obj.email, JSON.stringify(obj));

        showNewUserOnScreen(obj)

        
       
}

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('List of users');
    const childHTML = `<li> ${user.name} - ${user.email} </li>`

    parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}
