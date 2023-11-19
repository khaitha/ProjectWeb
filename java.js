"use strict";

// Function to handle form submission (signup)
function validateAndSubmit() {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    var phoneNumber = document.getElementById('PhoneNumber').value;

    // Perform validation (add your validation logic here)

    // If validation passes, create an account and store information in sessionStorage
    if (name && email && password && phoneNumber) {
        // Create a user object
        var user = {
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        };

        // Store user information in sessionStorage (convert to JSON)
        sessionStorage.setItem('currentUser', JSON.stringify(user));

        alert('Account created successfully!');
        // Redirect to the home page after signup
        window.location.href = 'home.html';
    } else {
        // Provide feedback to the user or prevent submission
        alert('Please fill in all required fields.');
    }
}

// Function to handle form submission (login)
function validateAndLogin() {
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;

    // Retrieve user data from sessionStorage
    var storedUser = sessionStorage.getItem('currentUser');

    if (storedUser) {
        var storedUserObj = JSON.parse(storedUser);

        // Check if entered email and password match stored data
        if (email === storedUserObj.email && password === storedUserObj.password) {
            alert('Login successful!');
            // Redirect to the home page after login
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }
}

// Function to display the username on the page
function displayUsername() {
    // Retrieve user data from sessionStorage
    var storedUser = sessionStorage.getItem('currentUser');

    if (storedUser) {
        var storedUserObj = JSON.parse(storedUser);
        
        // Display the username on the page
        document.getElementById('userNameDisplay').textContent = storedUserObj.name;
    }
}

// Function to redirect to another page
function redirectToPage(page) {
    window.location.href = page;
}

// Call the displayUsername function when the script is loaded
displayUsername();

function createPost() {
    // Retrieve user data from sessionStorage
    var storedUser = sessionStorage.getItem('currentUser');

    if (storedUser) {
        var storedUserObj = JSON.parse(storedUser);
        var postContent = document.getElementById('postContent').value;

        if (postContent) {
            // Create a post object
            var post = {
                userName: storedUserObj.name,
                content: postContent
            };

            // Display the post on the page
            displayPost(post);

            // Optionally, you can save the post to sessionStorage or another data store
            // SavePostToStorage(post);
        } else {
            alert('Please enter post content.');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }
}

// Function to display a post on the page
function displayPost(post) {
    var postContainer = document.getElementById('postContainer');

    // Create elements for the post
    var postElement = document.createElement('div');
    postElement.className = 'post';

    var userNameElement = document.createElement('p');
    userNameElement.textContent = post.userName;

    // Create a div for the post content
    var contentContainer = document.createElement('div');
    contentContainer.className = 'post-content';

    var contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    // Append elements to the post container
    postElement.appendChild(userNameElement);
    contentContainer.appendChild(contentElement);
    postElement.appendChild(contentContainer);

    // Save the post to Local Storage
    savePost(post);

    postContainer.appendChild(postElement);
}

// Function to save a post to Local Storage
function savePost(post) {
    var storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    storedPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(storedPosts));
}

// Function to retrieve posts from sessionStorage and display them
function displayStoredPosts() {
    var storedPosts = JSON.parse(sessionStorage.getItem('posts')) || [];
    var postContainer = document.getElementById('postContainer');

    // Clear the existing posts in the container
    postContainer.innerHTML = '';

    storedPosts.forEach(function (post) {
        displayPost(post);
    });
}

// Call displayStoredPosts to load existing posts when the script is loaded
displayStoredPosts();

// Function to save a post to sessionStorage
function savePostToStorage(post) {
    var storedPosts = JSON.parse(sessionStorage.getItem('posts')) || [];
    storedPosts.push(post);
    sessionStorage.setItem('posts', JSON.stringify(storedPosts));
}

// Example of saving a post
savePostToStorage(examplePost);



