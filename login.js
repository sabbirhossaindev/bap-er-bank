// step:1 submit btn ka capsure korsi id diya....& click Headler use korsi
document.getElementById('btn-submit').addEventListener('click', function () {
    // email ka capsure korsi id diya.
    // user ja likba ta value ta set korsi
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //  follow the email
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // compare tha password
    if (email === 'mdsabbir477470@gmail.com' && password === 'sabbir') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vule gasos !!!!');
    }
});
