// GRADE CALCULATİON 

let midterm = document.getElementById("midterm");
let final = document.getElementById("final");
let btnCalculate = document.getElementById("calculate");
let average = document.getElementById("average");
let letterGrade = document.getElementById("avletterGrade");

btnCalculate.addEventListener("click", () => {
    let midtermTxt = Number(midterm.value);
    let finalTxt = Number(final.value);

    let results = Math.round((midtermTxt * 0.40) + (finalTxt * 0.60));

    if (results >= 90 && results <= 100){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "AA";
        letterGrade.style.backgroundColor = "lightgreen";
    }
    else if (results >= 80 && results <= 89){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "BA";
        letterGrade.style.backgroundColor = "lightgreen";
    }
    else if (results >= 75 && results <= 79){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "BB";
        letterGrade.style.backgroundColor = "lightgreen";
    }
    else if (results >= 70 && results <= 74){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "CB";
        letterGrade.style.backgroundColor = "lightgreen";
    }
    else if (results >= 60 && results <= 69){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "CC";
        letterGrade.style.backgroundColor = "lightgreen";
    }
    else if (results >= 50 && results <= 59){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "DC";
        letterGrade.style.backgroundColor = "yellow";
    }
    else if (results >= 40 && results <= 49){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "DD";
        letterGrade.style.backgroundColor = "yellow";
    }
    else if (results >= 30 && results <= 39){
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "FD";
        letterGrade.style.backgroundColor = "red";
    }
    else {
        average.innerText = `Average : ${results}`;
        letterGrade.innerText = "FF";
        letterGrade.style.backgroundColor = "red";
    }
})


// Function to register a user
function registerUser() {
    // Get the input values
    var email = document.querySelector('input[type=email]').value;
    var password = document.querySelector('input[type=password]').value;

    // Check if the user already exists in localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    var existingUser = users.find(function (user) {
        return user.email === email;
    });

    if (existingUser) {
        alert('User with this email already exists. Please choose a different email.');
        return;
    }

    // Add the new user to the array
    var newUser = {
        email: email,
        password: password
    };

    users.push(newUser);

    // Store the updated array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    window.location.href="index.html";

};

// Function to login a user
function loginUser() {

    // Get the input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('remember').checked;

    // Retrieve users from localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists
    var user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        alert('Login successful!');

        // Save user session if "Remember me" is checked
        if (rememberMe) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
        }

        window.location.href="about.html";

    } else {
        alert('Invalid email or password. Please try again.');
    }
}
