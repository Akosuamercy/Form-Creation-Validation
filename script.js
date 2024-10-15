document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById ("username").value.trim();
        const email = document.getElementById ("email").value.trim();
        const password = document.getElementById ("password").value.trim();

        let isValid = true; 
        let messages = [];

        if (username.length < 3){
            isValid = false;
            messages.push("username must not be less than 3 characters");
        }

        if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            isValid = false; 
            messages.push ("Email must contain '@' and '.'");  
        }

        if (password.length <= 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long")
        }

        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
        } else {
            feedbackDiv.innerHTML = messages.join ("<br>");
            feedbackDiv.style.color = "#dc3545"; 
        }
    });
});
