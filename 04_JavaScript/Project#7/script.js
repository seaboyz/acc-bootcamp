var submit = document.getElementById('buttonSubmit');

// submit event
submit.addEventListener('click', checkEmpty);

function checkEmpty(e) {
    e.preventDefault();
    // get email input value
    var inputEmail = document.getElementById('inputEmail').value;
    // get password input value
    var inputPassword = document.getElementById('inputPassword').value;
    // check empty
    if ((inputEmail == '') || (inputPassword == '')){
        alert('Please check the fields and make sure they are not blank.');
    } else{
        // Delete the input content 
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputPassword').value = '';
    }
}