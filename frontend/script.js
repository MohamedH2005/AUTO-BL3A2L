"use strict";

/* ================= DATA ================= */
const carsData = [
    {
        id: 1,
        name: "S-Class 2024",
        type: "Luxury",
        price: 4200000,
        image: "images/s-class.jpg",
        description: "Luxury sedan with premium comfort and advanced technology.",
        horsepower: "496 HP",
        topSpeed: "250 km/h",
        acceleration: "4.9 sec"
    },
    {
        id: 2,
        name: "AMG GT 2024",
        type: "Sports",
        price: 5800000,
        image: "images/amg-gt.jpg",
        description: "High-performance sports car built for speed and power.",
        horsepower: "577 HP",
        topSpeed: "315 km/h",
        acceleration: "3.2 sec"
    },
    {
        id: 3,
        name: "GLE 2024",
        type: "SUV",
        price: 3500000,
        image: "images/gle.jpg",
        description: "Luxury SUV with spacious interior and smooth ride.",
        horsepower: "362 HP",
        topSpeed: "250 km/h",
        acceleration: "5.7 sec"
    },
    {
        id: 4,
        name: "Tesla Model 3",
        type: "EV",
        price: 2150000,
        image: "images/model-3.jpg",
        description: "Electric sedan with smart features and long range.",
        horsepower: "283 HP",
        topSpeed: "225 km/h",
        acceleration: "5.8 sec"
    },
    {
        id: 5,
        name: "Tesla Model Y",
        type: "EV SUV",
        price: 2550000,
        image: "images/model-y.jpg",
        description: "Electric SUV combining practicality and performance.",
        horsepower: "384 HP",
        topSpeed: "217 km/h",
        acceleration: "5.0 sec"
    },
    {
        id: 6,
        name: "Tesla Model X",
        type: "Luxury EV",
        price: 4950000,
        image: "images/model-x.jpg",
        description: "Premium electric SUV with falcon-wing doors.",
        horsepower: "670 HP",
        topSpeed: "250 km/h",
        acceleration: "3.9 sec"
    },
    {
        id: 7,
        name: "Mercedes C63",
        type: "Luxury EV",
        price: 5050000,
        image: "images/Mercedes C63 ~ AMG.jpg",
        description: "Premium electric SUV with falcon-wing doors.",
        horsepower: "900 HP",
        topSpeed: "300 km/h",
        acceleration: "2.9 sec"
    }
];

/* Get users from localStorage (managed by auth.js) */
const usersData = JSON.parse(localStorage.getItem("users")) || [];

/* ================= UTILITY ================= */
const $ = (s) => document.querySelector(s);

/* safe localStorage */
const getStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
};

/* ================= STATE ================= */
let currentList = carsData;
let favorites = getStorage("favorites");

/* ================= DETAILS ================= */
function openDetails(id) {
    localStorage.setItem("selectedCar", id);
    window.location.href = "car-details.html";
}

/* ================= FAVORITES ================= */
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateDashboard();
}

/* ================= RENDER CARS ================= */
function renderCars(list = carsData) {
    currentList = list;

    const container = $(".cars-grid");
    if (!container) return;

    container.innerHTML = list.map(car => `
        <div class="car-card">

            <div class="car-img">
                <img src="${car.image}" alt="${car.name}">
            </div>

            <div class="car-info">
                <h3>${car.name}</h3>
                <p>${car.type}</p>
                <p class="car-price">EGP ${car.price.toLocaleString()}</p>

                <div class="card-buttons">
                    <button class="btn-primary details-btn" data-id="${car.id}">
                        View Details
                    </button>

                    
                </div>
            </div>

        </div>
    `).join("");
}

/* ================= EVENT DELEGATION ================= */
document.addEventListener("click", (e) => {

    const favBtn = e.target.closest(".fav-btn");
    if (favBtn) {
        toggleFavorite(Number(favBtn.dataset.id));
        return;
    }

    const detailsBtn = e.target.closest(".details-btn");
    if (detailsBtn) {
        openDetails(Number(detailsBtn.dataset.id));
    }
});

/* ================= SEARCH (DEBOUNCED) ================= */
function debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function initSearch() {
    const input = $("#searchInput");
    const results = $("#searchResults");
    if (!input || !results) return;

    const render = (list) => {
        results.innerHTML = list.map(car => `
            <div class="car-card">

                <div class="car-img">
                    <img src="${car.image}" alt="${car.name}">
                </div>

                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p>${car.type}</p>
                    <p class="car-price">EGP ${car.price.toLocaleString()}</p>
                </div>

            </div>
        `).join("");
    };

    render(carsData);

    input.addEventListener("input", debounce((e) => {
        const value = e.target.value.toLowerCase();

        const filtered = carsData.filter(car =>
            car.name.toLowerCase().includes(value) ||
            car.type.toLowerCase().includes(value)
        );

        render(filtered);
    }));
}

/* ================= COMPARE ================= */
function initCompare() {
    const car1 = $("#car1");
    const car2 = $("#car2");

    if (!car1 || !car2) return;

    const fill = (select) => {
        select.innerHTML = carsData.map(car =>
            `<option value="${car.id}">${car.name}</option>`
        ).join("");
    };

    fill(car1);
    fill(car2);
}

function compareCars() {
    const id1 = Number($("#car1")?.value);
    const id2 = Number($("#car2")?.value);

    if (!id1 || !id2 || id1 === id2) return;

    const c1 = carsData.find(c => c.id === id1);
    const c2 = carsData.find(c => c.id === id2);

    if (!c1 || !c2) return;

    $("#car1Name").textContent = c1.name;
    $("#car2Name").textContent = c2.name;

    $("#car1Power").textContent = c1.horsepower;
    $("#car2Power").textContent = c2.horsepower;

    $("#car1Speed").textContent = c1.topSpeed;
    $("#car2Speed").textContent = c2.topSpeed;

    $("#car1Price").textContent = "EGP " + c1.price.toLocaleString();
    $("#car2Price").textContent = "EGP " + c2.price.toLocaleString();
}

/* ================= DASHBOARD ================= */
function initDashboard() {
    const box = $("#savedCarsCount");
    if (box) box.textContent = favorites.length;
}

function updateDashboard() {
    const box = $("#savedCarsCount");
    if (box) box.textContent = favorites.length;
}

/* ================= CAR DETAILS ================= */
function renderCarDetails() {
    const container = $("#carDetails");
    if (!container) return;

    const id = Number(localStorage.getItem("selectedCar"));
    const car = carsData.find(c => c.id === id);

    if (!car) {
        container.innerHTML = "<h2>Car not found</h2>";
        return;
    }

    container.innerHTML = `
        <div class="car-card">

            <div class="car-img">
                <img src="${car.image}" alt="${car.name}">
            </div>

            <div class="car-info">
                <h2>${car.name}</h2>
                <p><strong>Type:</strong> ${car.type}</p>
                <p><strong>Price:</strong> EGP ${car.price.toLocaleString()}</p>
                <p><strong>Description:</strong> ${car.description}</p>
                <p><strong>Horsepower:</strong> ${car.horsepower}</p>
                <p><strong>Top Speed:</strong> ${car.topSpeed}</p>
                <p><strong>0-100 km/h:</strong> ${car.acceleration}</p>
            </div>

        </div>
    `;
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
    renderCars();
    initSearch();
    initCompare();
    initDashboard();
    renderCarDetails();
});