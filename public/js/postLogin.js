const logoutHandler = async () => {
    // TODO: Add a comment describing the functionality of this expression
    // We are performing an API call to the URL below via a post request 
    // which will invalidate a users's current session and would therefore log the current user out 
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // TODO: Add a comment describing the functionality of this statement
        // Once the user has been logged out, put them back into the login page to save another redirect if they were to go to /
        document.location.replace('/login');
    } else {
        alert('Failed to log out');
    }
};

document.querySelector('#logout').addEventListener('click', logoutHandler);

const homeButton = async () => {
    document.location.replace('/');
};
document.querySelector('#home').addEventListener('click', homeButton);

const dashboardButton = async () => {
    document.location.replace('/dashboard');
};
document.querySelector('#dashboard').addEventListener('click', dashboardButton);
