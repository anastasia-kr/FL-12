let email = prompt('Please enter your e-mail', '');
let pass;
const email1 = 'user@gmail.com';
const email2 = 'admin@gmail.com';
const pass1 = 'UserPass';
const pass2 = 'AdminPass';
let changePass;
let oldPass;
let newPass;
let repeatNewPass;
const five = 5;
const six = 6;


if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < five) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === email1 || email === email2) {
    pass = prompt('Please enter your password', '');
} else {
    alert('I don\'t know you');
}


if (pass === '' || pass === null) {
    alert('Canceled');
} else if (!(email === email1 && pass === pass1 || email === email2 && pass === pass2)) {   
    alert('Wrong password');
    changePass = confirm('Do you want to change your password?');
    if (changePass === false) {
        alert('You have failed the change.');
    } else {
        oldPass = prompt('Please enter your old password');
        if (email === email1 && oldPass === pass1 || email === email2 && oldPass === pass2) {
            newPass = prompt('Please enter a new password');
        }
        if (newPass === '' || newPass === null) {
            alert('Canceled');
        } else if (newPass.length < six) {
            alert('It’s too short password. Sorry.');
        } else {
            repeatNewPass = prompt('Repeat your new password 2nd time');
            if (newPass !== repeatNewPass) {
                alert('You wrote the wrong password.');
            } else {
                alert('You have successfully changed your password.');
            }
        }
    }
}