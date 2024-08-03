document.addEventListener('DOMContentLoaded', () => {
    // Function to validate registration form
    function validateRegistrationForm(event) {
        let valid = true;

        // Clear previous errors
        document.querySelectorAll('#registrationForm .error-message').forEach(el => el.textContent = '');

        // Username validation
        const username = document.getElementById('username').value;
        if (username.length < 3) {
            document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
            valid = false;
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email address.';
            valid = false;
        }

        // Password validation
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    }

    // Function to validate login form
    function validateLoginForm(event) {
        let valid = true;

        // Clear previous errors
        document.querySelectorAll('#loginForm .error-message').forEach(el => el.textContent = '');

        // Email validation
        const email = document.getElementById('loginEmail').value;
        const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('loginEmailError').textContent = 'Invalid email address.';
            valid = false;
        }

        // Password validation
        const password = document.getElementById('loginPassword').value;
        if (password.length < 6) {
            document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters long.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    }

    // Add event listeners to forms
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', validateRegistrationForm);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }
});
