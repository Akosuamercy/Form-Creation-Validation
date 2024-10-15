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

        if (!email.includes('@')) {
            
        }



    })
})
