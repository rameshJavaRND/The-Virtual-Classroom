const validation = () => {
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const pno = document.getElementById('pno');
    const subject = document.getElementById('subject');
    const branch = document.getElementById('branch');
    const error_msg = document.getElementById('error_msg');

    if(name.value === "" || username.value === "" || password.value === "" || pno.value === "" || subject.value === "" || branch.value === "") { 
        
        error_msg.style.display = 'block';
        error_msg.textContent = 'Please fill all the fields !!!';

        setTimeout(() => {
            error_msg.style.display = 'none'
        }, 3000);
    }
    // else if(pno.validity.patternMismatch) {
    //     return pno.setCustomValidity('Pattern Mismatch : Please follow the format - 111-33-555')
    // } 
    else {

    }
}

export default validation;