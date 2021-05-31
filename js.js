const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username'); //call by id
//website refreshes by default on clicking on event
form.addEventListener('submit' , e => {
    e.preventDefault(); //prevents refreshing the webpage while clicking on the event

    //console.log(username.value); //getting the valur of username field

    // form.username -> gets username id/name from form tag. we don't need to call id like 2nd line
    console.log(form.username.value);
});

// testing RegEx
const username = "sharmin";
const pattern = /^[a-z]{6,}$/;  //regex small letters atleast 6 characters

// let result = username.search(pattern); //shows int value where it matchs
// console.log(result);



let result = pattern.test(username); //returns buolean either true or false
// console.log(result);

if(result) {
    console.log('rehex matched :)');
} else{
    console.log('rehex matched :(');
}

