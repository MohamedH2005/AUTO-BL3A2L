"use strict";

/* ================= AUTHENTICATION SYSTEM ================= */

/* Initialize users from localStorage or use default data */
function initializeUsers() {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        return JSON.parse(storedUsers);
    }
    
    /* Default users if localStorage is empty */
    const defaultUsers = [
        {
            id: 1,
            name: "sayed",
            type: "admin",
            email: "mohamedsayedf504",
            password: "admin123"
        },
        {
            id: 2,
            name: "hassan",
            type: "user",
            email: "mohamedhassan504",
            password: "user123"
        },
        {
            id: 3,
            name: "3abdo",
            type: "user",
            email: "mazen3abdo504",
            password: "user123"
        }
    ];
    
    localStorage.setItem("users", JSON.stringify(defaultUsers));
    return defaultUsers;
}

/* Get all users from localStorage */
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

/* Add a new user to localStorage */
function addUser(name, email, password) {
    const users = getUsers();
    
    /* Check if email already exists */
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return { success: false, message: "Email already exists" };
    }
    
    /* Create new user */
    const newUser = {
        id: users.length + 1,
        name: name,
        type: "user",
        email: email,
        password: password
    };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    return { success: true, message: "Account created successfully", user: newUser };
}

/* Login user with email and password */
function loginUser(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        /* Store current user in localStorage */
        localStorage.setItem("currentUser", JSON.stringify(user));
        return { success: true, message: "Login successful", user: user };
    } else {
        return { success: false, message: "Invalid email or password" };
    }
}

/* Get current logged-in user */
function getCurrentUser() {
    const userJson = localStorage.getItem("currentUser");
    return userJson ? JSON.parse(userJson) : null;
}

/* Logout current user */
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}

/* Check if user is authenticated */
function isAuthenticated() {
    return getCurrentUser() !== null;
}

/* Check if current user is admin */
function isAdmin() {
    const user = getCurrentUser();
    return user && user.type === "admin";
}

/* Protect page - redirect to login if not authenticated */
function protectPage() {
    if (!isAuthenticated()) {
        alert("Please login to access this page");
        window.location.href = "login.html";
    }
}

/* Protect admin page - redirect if not admin */
function protectAdminPage() {
    if (!isAuthenticated()) {
        alert("Please login to access this page");
        window.location.href = "login.html";
        return;
    }
    
    if (!isAdmin()) {
        alert("Access denied. Admin only.");
        window.location.href = "index.html";
    }
}

/* ================= BOOKING SYSTEM ================= */

/* Get all bookings from localStorage */
function getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

/* Save a new booking */
function saveBooking(carId, carName, name, email, phone, date, time) {
    const bookings = getBookings();
    const currentUser = getCurrentUser();
    
    const newBooking = {
        id: bookings.length + 1,
        carId: carId,
        carName: carName,
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        userEmail: currentUser ? currentUser.email : email,
        createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    
    return { success: true, message: "Test drive booked successfully", booking: newBooking };
}

/* Get bookings for current user */
function getUserBookings() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    
    const bookings = getBookings();
    return bookings.filter(b => b.userEmail === currentUser.email);
}

/* ================= UI HELPERS ================= */

/* Update navbar with user info */
function updateNavbar() {
    const currentUser = getCurrentUser();
    const navLinks = document.querySelector(".nav-links");
    
    if (!navLinks) return;
    
    if (currentUser) {
        /* Add username and logout button */
        const userItem = document.createElement("li");
        userItem.innerHTML = `<span style="color: #c0a060; font-weight: bold;">Hello, ${currentUser.name}</span>`;
        
        const logoutItem = document.createElement("li");
        logoutItem.innerHTML = `<a href="#" onclick="logout()" style="color: #ff6b6b;">Logout</a>`;
        
        /* Remove login link if exists */
        const loginLink = navLinks.querySelector('a[href="login.html"]');
        if (loginLink) {
            loginLink.parentElement.remove();
        }
        
        navLinks.appendChild(userItem);
        navLinks.appendChild(logoutItem);
        
        /* Add admin link if user is admin */
        if (currentUser.type === "admin") {
            const adminItem = document.createElement("li");
            adminItem.innerHTML = `<a href="admin.html" style="color: #c0a060;">Admin Panel</a>`;
            navLinks.appendChild(adminItem);
        }
    }
}

/* Show alert message */
function showAlert(message, type = "info") {
    alert(message);
}
