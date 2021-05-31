const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit' , e => {
    e.preventDefault();

    //validation
    const username = form.username.value;

    if(usernamePattern.test(username)) {
        feedback.textContent = 'username is valid';
    }else {
        feedback.textContent = 'username is not valid';
    }
});

// keyboard events

// live validation check before submitting

//live feedback
form.username.addEventListener('keyup', ee => {
    // console.log(ee.target.value , form.username.value);
    if(usernamePattern.test(ee.target.value)) {
        form.username.setAttribute('class' , 'success');
        // console.log('passed');
    }else 
    {
        form.username.setAttribute('class' , 'failed');
        // console.log('failed');
    }
});

