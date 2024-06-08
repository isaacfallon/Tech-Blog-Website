const loginFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    // We want to prevent the default behavior of a form post because we want to do extra preprocessing before handoff
    event.preventDefault();

    // TODO: Add a comment describing the functionality of these expressions
    // We are looking into the DOM and pulling in the values provided in the user input fields (namely the email and password fields)
    const user = document.querySelector('#userName-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (user && password) {
        // TODO: Add a comment describing the functionality of this expression
        // We are calling the fetch() api with a target url of /api/user/login. We then await the response and post the user's email and password as body elements.
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document.querySelector('#home').addEventListener('click', homeButton);
