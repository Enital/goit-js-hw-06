const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === '' || password === '') {
        alert('All fields must be filled!');
        return;
    }

    const sendObject = {
        email,
        password,
    };

    console.log(sendObject);
    event.currentTarget.reset();
};