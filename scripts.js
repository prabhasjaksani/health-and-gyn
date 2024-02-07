function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Retrieve user data from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any registered user
    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'page2.html';
        // You can redirect to another page here
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function register() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;

    // Retrieve user data from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (users.some(u => u.username === username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    // Add the new user to the list
    users.push({ username, password });

    // Save the updated user data to local storage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now login.');
    // You can redirect to the login page here
}
