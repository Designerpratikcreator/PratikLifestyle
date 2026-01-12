// --- Data Structure for Cars ---
const carsData = [
    {
        id: 'honda-civic-2022',
        brand: 'Honda',
        model: 'Civic',
        year: 2022,
        mileage: '15,000 km',
        engine: '1.5L Turbo',
        transmission: 'Automatic',
        features: ['Sunroof', 'Leather Seats', 'Apple CarPlay', 'Lane Keep Assist'],
        price: 3500000,
        image: '/Assets/Honda Civic.jpg'
    },
    {
        id: 'honda-crv-2021',
        brand: 'Honda',
        model: 'CR-V',
        year: 2021,
        mileage: '22,000 km',
        engine: '2.0L i-VTEC',
        transmission: 'Automatic',
        features: ['AWD', 'Panoramic Roof', 'Adaptive Cruise Control'],
        price: 9500000,
        image: '/Assets/Honda crv.jpg'
    },
    {
        id: 'mitsubishi-pajero-2020',
        brand: 'Mitsubishi',
        model: 'Pajero',
        year: 2020,
        mileage: '35,000 km',
        engine: '3.2L Diesel',
        transmission: 'Automatic',
        features: ['4x4', 'Off-road Package', '7-Seater'],
        price: 18000000,
        image: '/Assets/Mitsubishi pajero.jpg'
    },
    {
        id: 'toyota-camry-2023',
        brand: 'Toyota',
        model: 'Camry',
        year: 2023,
        mileage: '8,000 km',
        engine: '2.5L Hybrid',
        transmission: 'CVT',
        features: ['Hybrid System', 'Blind Spot Monitor', 'JBL Audio'],
        price: 13200000,
        image: '/Assets/Toyota camry.jpg'
    },
    {
        id: 'toyota-fortuner-2022',
        brand: 'Toyota',
        model: 'Fortuner',
        year: 2022,
        mileage: '18,000 km',
        engine: '2.8L Diesel',
        transmission: 'Automatic',
        features: ['7-Seater', 'Leather Interior', 'LED Headlights'],
        price: 20000000,
        image: '/Assets/Toyota fortuner.jpg'
    },
    {
        id: 'hyundai-tucson-2021',
        brand: 'Hyundai',
        model: 'Tucson',
        year: 2021,
        mileage: '25,000 km',
        engine: '2.0L Petrol',
        transmission: 'Automatic',
        features: ['Panoramic Sunroof', 'Ventilated Seats', 'Wireless Charging'],
        price: 7000000,
        image: '/Assets/Hyundai Tucson .jpg'
    },
    {
        id: 'porsche-911-2020',
        brand: 'Porsche',
        model: '911 Carrera',
        year: 2020,
        mileage: '10,000 km',
        engine: '3.0L Twin-Turbo',
        transmission: 'PDK',
        features: ['Sport Chrono Package', 'Bose Surround Sound', 'Carbon Ceramic Brakes'],
        price: 17100000,
        image: '/Assets/Porsche 911.jpeg'
    },
    {
        id: 'landrover-discovery-2022',
        brand: 'Land Rover',
        model: 'Discovery',
        year: 2022,
        mileage: '12,000 km',
        engine: '3.0L Ingenium',
        transmission: 'Automatic',
        features: ['Air Suspension', 'Meridian Sound System', 'Terrain Response 2'],
        price: 20000000,
        image: '/Assets/Land rover.jpg'
    },
    {
        id: 'defenders-90-2021',
        brand: 'Defenders', // Assuming 'Defenders' is treated as a brand here
        model: 'Defender 90',
        year: 2021,
        mileage: '18,000 km',
        engine: '3.0L P400',
        transmission: 'Automatic',
        features: ['Off-Road Tires', 'Winch', 'Expedition Roof Rack'],
        price: 40000000,
        image: '/Assets/Defender.jpg'
    },
    {
        id: 'jeep-wrangler-2020',
        brand: 'Jeep',
        model: 'Wrangler Rubicon',
        year: 2020,
        mileage: '28,000 km',
        engine: '3.6L Pentastar',
        transmission: 'Automatic',
        features: ['Removable Roof', 'Off-Road Suspension', 'Locking Differentials'],
        price: 25000000,
        image: '/Assets/Jeep.jpg'
    },
    {
        id: 'ford-f150-2023',
        brand: 'Ford',
        model: 'F-150 Raptor',
        year: 2023,
        mileage: '5,000 km',
        engine: '3.5L EcoBoost',
        transmission: '10-Speed Automatic',
        features: ['Fox Racing Shocks', 'Trail Control', 'Pro Power Onboard'],
        price: 22000000,
        image: '/Assets/Ford.jpg'
    },
    {
        id: 'toyota-prius-2021',
        brand: 'Toyota',
        model: 'Prius',
        year: 2021,
        mileage: '20,000 km',
        engine: '1.8L Hybrid',
        transmission: 'CVT',
        features: ['Excellent Fuel Economy', 'Toyota Safety Sense', 'Heated Seats'],
        price: 6000000,
        image: '/Assets/Toyota Prius.jpeg'
    },
    {
        id: 'honda-accord-2020',
        brand: 'Honda',
        model: 'Accord',
        year: 2020,
        mileage: '30,000 km',
        engine: '2.0L Turbo',
        transmission: 'Automatic',
        features: ['Honda Sensing', 'Wireless Phone Charger', 'Heads-Up Display'],
        price: 7250000,
        image: '/Assets/Honda Accord 2020.jpg'
    },
    {
        id: 'mitsubishi-outlander-2022',
        brand: 'Mitsubishi',
        model: 'Outlander',
        year: 2022,
        mileage: '10,000 km',
        engine: '2.5L MIVEC',
        transmission: 'CVT',
        features: ['Super All-Wheel Control', '3rd Row Seating', 'Bose Premium Audio'],
        price: 12000000,
        image: '/Assets/Mitsubishi pajero.jpg'
    },
    {
        id: 'hyundai-elantra-2023',
        brand: 'Hyundai',
        model: 'Elantra',
        year: 2023,
        mileage: '7,000 km',
        engine: '2.0L MPI',
        transmission: 'IVT',
        features: ['Digital Key', 'Smart Trunk', 'LED Daytime Running Lights'],
        price: 2550000,
        image: '/Assets/Hyundai Elantra.jpeg'
    },
];

// --- Global Variables and DOM Elements ---
const contentArea = document.getElementById('content-area');
const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const messageModal = document.getElementById('messageModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');

let minPrice = 0;
let maxPrice = 50000000; // Max price in our dataset
let currentMinPrice = 0;
let currentMaxPrice = maxPrice;

// --- Utility Functions ---

/**
 * Displays a custom modal message.
 * @param {string} title - The title of the modal.
 * @param {string} message - The message content.
 */
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    messageModal.classList.remove('hidden');
}

/**
 * Sets the theme based on localStorage or system preference.
 */
function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light'); // Explicitly set light theme in local storage
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

/**
 * Toggles between dark and light themes.
 */
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

/**
 * Renders the car cards for a given list of cars.
 * @param {Array} cars - Array of car objects to display.
 * @returns {string} HTML string of car cards.
 */
function renderCarCards(cars) {
    if (cars.length === 0) {
        return `<p class="text-center text-xl py-10">No cars found matching your criteria. Please adjust your filters.</p>`;
    }
    return cars.map(car => `
        <div class="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-color">
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-primary">${car.year} ${car.brand} ${car.model}</h3>
                <p class="text-text-light mb-4 font-bold text-lg">RS${car.price.toLocaleString()}</p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 mb-4 list-disc list-inside">
                    <li>Mileage: ${car.mileage}</li>
                    <li>Engine: ${car.engine}</li>
                    <li>Transmission: ${car.transmission}</li>
                    <li>Features: ${car.features.slice(0, 2).join(', ')}${car.features.length > 2 ? '...' : ''}</li>
                </ul>
                <button onclick="showModal('Car Details', 'More details for ${car.brand} ${car.model} will be shown here. This is a demo.')" class="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary-dark transition-colors duration-200">View Details</button>
            </div>
        </div>
    `).join('');
}

// --- Section Rendering Functions ---

/**
 * Renders the Home section (Advertising).
 */
function renderHome() {
    contentArea.innerHTML = `
        <section id="home" class="hoarding-bg relative h-[70vh] flex items-center justify-center text-white text-center rounded-b-lg overflow-hidden shadow-xl">
            <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-6">
                <h1 class="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                    Drive Your Dream Car Today
                </h1>
                <p class="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
                    Discover quality reconditioned automobiles from top brands, meticulously inspected for your peace of mind.
                </p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#gallery" class="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Browse Our Cars
                    </a>
                    <a href="#booking" class="bg-white text-primary py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Book a Test Drive
                    </a>
                </div>
            </div>
        </section>

        <section class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">Why Choose Pratik Automobile?</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-card p-8 rounded-lg shadow-md text-center border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-check-circle text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Quality Assured</h3>
                    <p class="text-gray-600 dark:text-gray-400">Every vehicle undergoes rigorous multi-point inspection.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md text-center border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-tags text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Competitive Pricing</h3>
                    <p class="text-gray-600 dark:text-gray-400">Get the best value for your money with transparent pricing.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md text-center border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-headset text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Exceptional Service</h3>
                    <p class="text-gray-600 dark:text-gray-400">Our team is dedicated to providing a smooth buying experience.</p>
                </div>
            </div>
        </section>
    `;
}

/**
 * Renders the About section.
 */
function renderAbout() {
    contentArea.innerHTML = `
        <section id="about" class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">About Pratik Automobile</h2>
            <div class="bg-card p-8 rounded-lg shadow-lg border border-color max-w-4xl mx-auto">
                <p class="text-lg leading-relaxed mb-6 text-text-light">
                    Welcome to Pratik Automobile, your trusted destination for high-quality reconditioned vehicles.
                    With years of experience in the automotive industry, we are committed to providing our customers
                    with reliable cars and exceptional service. Our mission is to make your car buying journey
                    as smooth, transparent, and enjoyable as possible.
                </p>
                <p class="text-lg leading-relaxed mb-6 text-text-light">
                    At Pratik Automobile, every vehicle in our inventory undergoes a rigorous multi-point inspection
                    by certified technicians. We ensure that each car meets our stringent standards for safety,
                    performance, and reliability before it reaches our showroom. We believe in transparency,
                    providing you with comprehensive vehicle history reports and detailed information about each car.
                </p>
                <p class="text-lg leading-relaxed text-text-light">
                    Our diverse selection includes popular models from top brands like Honda, Toyota, Mitsubishi,
                    Hyundai, and luxury marques such as Porsche, Land Rover, and Jeep. Whether you're looking for
                    a family SUV, a fuel-efficient sedan, or a powerful off-roader, Pratik Automobile has something
                    to suit every need and budget. Come visit us and experience the Pratik Automobile difference!
                </p>
            </div>
        </section>
    `;
}

/**
 * Renders a specific Brand page.
 * @param {string} brandName - The name of the brand to display.
 */
function renderBrandPage(brandName) {
    const filteredCars = carsData.filter(car => car.brand === brandName);
    contentArea.innerHTML = `
        <section id="brand-${brandName.toLowerCase().replace(/\s/g, '')}" class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">${brandName} Reconditioned Cars</h2>
            <div class="bg-card p-8 rounded-lg shadow-lg border border-color mb-12 max-w-4xl mx-auto">
                <p class="text-lg leading-relaxed text-text-light">
                    Explore our curated selection of high-quality reconditioned ${brandName} vehicles.
                    Known for their reliability, innovation, and performance, ${brandName} cars offer exceptional value.
                    Each vehicle has undergone our comprehensive inspection process to ensure it meets our rigorous standards.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${renderCarCards(filteredCars)}
            </div>
        </section>
    `;
}

/**
 * Renders the Features section.
 */
function renderFeatures() {
    contentArea.innerHTML = `
        <section id="features" class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">Our Distinctive Features</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-car-alt text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Rigorous 150-Point Inspection</h3>
                    <p class="text-gray-600 dark:text-gray-400">Every vehicle undergoes a meticulous check covering mechanical, electrical, and cosmetic aspects to ensure peak condition.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-shield-alt text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Comprehensive Warranty Options</h3>
                    <p class="text-gray-600 dark:text-gray-400">Drive with confidence. We offer various warranty packages to protect your investment.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-file-invoice text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Transparent Vehicle History</h3>
                    <p class="text-gray-600 dark:text-gray-400">Access detailed history reports for every car, including previous ownership, service records, and accident history.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-handshake text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Flexible Financing Solutions</h3>
                    <p class="text-gray-600 dark:text-gray-400">Our finance experts work with you to find the best loan options tailored to your budget.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-exchange-alt text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Trade-In Assistance</h3>
                    <p class="text-gray-600 dark:text-gray-400">Get a fair valuation for your current vehicle and seamlessly trade it in towards your new purchase.</p>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-map-marker-alt text-5xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-3 text-text-light">Nationwide Delivery</h3>
                    <p class="text-gray-600 dark:text-gray-400">We offer convenient delivery options to bring your chosen car right to your doorstep.</p>
                </div>
            </div>
        </section>
    `;
}

/**
 * Renders the Gallery section with filters.
 * @param {number|string} filterYear - The year to filter by, or 'all' for no year filter.
 */
function renderGallery(filterYear = 'all') {
    let filteredCars = carsData;

    if (filterYear !== 'all') {
        filteredCars = filteredCars.filter(car => car.year === parseInt(filterYear));
    }

    // Apply price filter
    filteredCars = filteredCars.filter(car => car.price >= currentMinPrice && car.price <= currentMaxPrice);

    contentArea.innerHTML = `
        <section id="gallery" class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">Our Car Gallery</h2>
            <div class="bg-card p-8 rounded-lg shadow-lg border border-color mb-12 max-w-4xl mx-auto">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                    <div class="w-full md:w-1/3">
                        <label for="year-filter" class="block text-sm font-medium text-text-light mb-2">Filter by Year:</label>
                        <select id="year-filter" class="block w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="all">All Years</option>
                            ${[...new Set(carsData.map(car => car.year))].sort((a, b) => b - a).map(year => `
                                <option value="${year}" ${year == filterYear ? 'selected' : ''}>${year} Models</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="w-full md:w-2/3 md:ml-8">
                        <label for="price-range" class="block text-sm font-medium text-text-light mb-2">Price Range: RS<span id="min-price-display">${currentMinPrice.toLocaleString()}</span> - RS<span id="max-price-display">${currentMaxPrice.toLocaleString()}</span></label>
                        <div class="range-slider" id="price-range-slider">
                            <div class="range-fill"></div>
                            <div class="range-handle left-handle" data-handle="min"></div>
                            <div class="range-handle right-handle" data-handle="max"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-car-list">
                ${renderCarCards(filteredCars)}
            </div>
        </section>
    `;

    // Attach event listeners for filters after rendering
    document.getElementById('year-filter').addEventListener('change', (e) => {
        const selectedYear = e.target.value;
        currentMinPrice = minPrice; // Reset price filter when year changes
        currentMaxPrice = maxPrice;
        renderGallery(selectedYear);
    });

    // Initialize price slider
    initPriceSlider();
}

/**
 * Initializes the custom price range slider.
 */
function initPriceSlider() {
    const slider = document.getElementById('price-range-slider');
    const fill = slider.querySelector('.range-fill');
    const minHandle = slider.querySelector('.left-handle');
    const maxHandle = slider.querySelector('.right-handle');
    const minPriceDisplay = document.getElementById('min-price-display');
    const maxPriceDisplay = document.getElementById('max-price-display');

    let isDraggingMin = false;
    let isDraggingMax = false;

    const updateSlider = () => {
        const sliderWidth = slider.offsetWidth;
        const minPos = ((currentMinPrice - minPrice) / (maxPrice - minPrice)) * sliderWidth;
        const maxPos = ((currentMaxPrice - minPrice) / (maxPrice - minPrice)) * sliderWidth;

        minHandle.style.left = `${minPos}px`;
        maxHandle.style.left = `${maxPos}px`;
        fill.style.left = `${minPos}px`;
        fill.style.width = `${maxPos - minPos}px`;

        minPriceDisplay.textContent = currentMinPrice.toLocaleString();
        maxPriceDisplay.textContent = currentMaxPrice.toLocaleString();
    };

    const getPriceFromX = (x) => {
        const sliderRect = slider.getBoundingClientRect();
        let percentage = (x - sliderRect.left) / sliderRect.width;
        percentage = Math.max(0, Math.min(1, percentage)); // Clamp between 0 and 1
        return Math.round((minPrice + percentage * (maxPrice - minPrice)) / 1000) * 1000; // Round to nearest 1000
    };

    const onMouseMove = (e) => {
        let clientX = e.clientX;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
        }

        if (isDraggingMin) {
            let newPrice = getPriceFromX(clientX);
            currentMinPrice = Math.min(newPrice, currentMaxPrice);
        } else if (isDraggingMax) {
            let newPrice = getPriceFromX(clientX);
            currentMaxPrice = Math.max(newPrice, currentMinPrice);
        }
        updateSlider();
        // Re-render cars with new price filter, keeping the current year filter
        const currentYearFilter = document.getElementById('year-filter') ? document.getElementById('year-filter').value : 'all';
        renderGallery(currentYearFilter);
    };

    const onMouseUp = () => {
        isDraggingMin = false;
        isDraggingMax = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
    };

    minHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDraggingMin = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    minHandle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDraggingMin = true;
        document.addEventListener('touchmove', onMouseMove);
        document.addEventListener('touchend', onMouseUp);
    });

    maxHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDraggingMax = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    maxHandle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDraggingMax = true;
        document.addEventListener('touchmove', onMouseMove);
        document.addEventListener('touchend', onMouseUp);
    });

    // Initial update
    updateSlider();
}


/**
 * Renders the Booking section.
 */
function renderBooking() {
    contentArea.innerHTML = `
        <section id="booking" class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">Book Your Dream Car</h2>
            <div class="bg-card p-8 rounded-lg shadow-lg border border-color max-w-3xl mx-auto">
                <form id="booking-form" class="space-y-6" action="https://formspree.io/f/mjkorllj" method="POST">
                    
                    <div>
                        <h3 class="text-2xl font-semibold mb-4 text-text-light">1. Select Your Car</h3>
                        <label for="booking-car" class="block text-sm font-medium text-text-light mb-2">Choose a car:</label>
                        <select id="booking-car" name="car" class="w-full p-3 border border-color rounded-md input-bg" required>
                            <option value="">-- Select a Car --</option>
                            ${carsData.map(car => `<option value="${car.year} ${car.brand} ${car.model} (RS${car.price.toLocaleString()})">${car.year} ${car.brand} ${car.model}</option>`).join('')}
                        </select>
                    </div>

                    <div>
                        <h3 class="text-2xl font-semibold mb-4 text-text-light">2. Your Details</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="full-name" class="block text-sm font-medium text-text-light mb-2">Full Name:</label>
                                <input type="text" id="full-name" name="fullName" class="w-full p-3 border border-color rounded-md input-bg" required>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-text-light mb-2">Email:</label>
                                <input type="email" id="email" name="email" class="w-full p-3 border border-color rounded-md input-bg" required>
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-text-light mb-2">Phone:</label>
                                <input type="tel" id="phone" name="phone" class="w-full p-3 border border-color rounded-md input-bg" required>
                            </div>
                            <div>
                                <label for="address" class="block text-sm font-medium text-text-light mb-2">Address:</label>
                                <input type="text" id="address" name="address" class="w-full p-3 border border-color rounded-md input-bg" required>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="payment-method" class="block text-sm font-medium text-text-light mb-2">Preferred Payment Method:</label>
                        <select id="payment-method" name="paymentMethod" class="w-full p-3 border border-color rounded-md input-bg" required>
                            <option value="">-- Select Method --</option>
                            <option value="bank-transfer">Bank Transfer</option>
                            <option value="financing">Financing</option>
                            <option value="direct-payment">Direct Payment</option>
                        </select>
                    </div>

                    <div class="flex items-center mt-4">
                        <input type="checkbox" id="terms-agree" name="termsAgree" class="h-4 w-4 text-primary border-gray-300" required>
                        <label for="terms-agree" class="ml-2 text-sm text-text-light">I agree to the <a href="#" class="text-primary underline">Terms & Conditions</a>.</label>
                    </div>

                    <button type="submit" class="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary-dark transition transform hover:scale-105">
                        Submit Booking Request
                    </button>
                </form>
            </div>
        </section>
    `;

    // Optionally detect ?success=1 and show confirmation
    if (window.location.search.includes("success=1")) {
        showModal("Booking Sent", "Thank you! We'll contact you shortly.");
        history.replaceState(null, "", window.location.pathname); // remove query param
    }

    // Attach form submission listener for the booking form
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission to handle with JS

        const selectedCar = document.getElementById('booking-car').value;
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const termsAgree = document.getElementById('terms-agree').checked;

        if (!selectedCar || !fullName || !email || !phone || !address || !paymentMethod || !termsAgree) {
            showModal('Validation Error', 'Please fill in all required fields and agree to the terms.');
            return;
        }

        // If validation passes, allow the form to submit to Formspree
        // Formspree will handle the actual submission and redirect
        // For local testing without Formspree, you might use an AJAX call or simply log
        console.log('Booking Details:', {
            selectedCar, fullName, email, phone, address, paymentMethod, termsAgree
        });


        this.submit(); // Actually submit the form (to Formspree if action is set)
    });
}

/**
 * Renders the Contact section.
 */
function renderContact() {
    contentArea.innerHTML = `
        <section id="contact" class="container mx-auto py-16 px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-primary">Get in Touch</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div class="bg-card p-8 rounded-lg shadow-lg border border-color">
                    <h3 class="text-2xl font-semibold mb-6 text-text-light">Send Us a Message</h3>
                    <form id="contact-form" class="space-y-4">
                        <div>
                            <label for="contact-name" class="block text-sm font-medium text-text-light mb-2">Your Name:</label>
                            <input type="text" id="contact-name" name="name" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                        </div>
                        <div>
                            <label for="contact-email" class="block text-sm font-medium text-text-light mb-2">Your Email:</label>
                            <input type="email" id="contact-email" name="email" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                        </div>
                        <div>
                            <label for="contact-subject" class="block text-sm font-medium text-text-light mb-2">Subject:</label>
                            <input type="text" id="contact-subject" name="subject" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                        </div>
                        <div>
                            <label for="contact-message" class="block text-sm font-medium text-text-light mb-2">Your Message:</label>
                            <textarea id="contact-message" name="message" rows="5" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                        </div>
                        <button type="submit" class="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary-dark transition-colors duration-200 transform hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>
                <div class="bg-card p-8 rounded-lg shadow-lg border border-color">
                    <h3 class="text-2xl font-semibold mb-6 text-text-light">Contact Information</h3>
                    <div class="space-y-4 text-text-light">
                        <p><i class="fas fa-phone-alt text-primary mr-3"></i> +977 9861347187</p>
                        <p><i class="fas fa-envelope text-primary mr-3"></i> Pratik_mhnrs2023@kusoa.edu.np</p>
                        <p><i class="fas fa-map-marker-alt text-primary mr-3"></i> Lalitpur Ring Road, Gwarko, Nepal</p>
                        <p><i class="fas fa-clock text-primary mr-3"></i> Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>

            <div id="feedback-section" class="mt-16">
                ${renderFeedbackSection()}
            </div>
        </section>
    `;

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;

        if (!name || !email || !subject || !message) {
            showModal('Validation Error', 'Please fill in all contact form fields.');
            return;
        }

        console.log('Contact Form Submission:', { name, email, subject, message });
        showModal('Message Sent!', 'Thank you for your message, ' + name + '! We will get back to you shortly.');
        this.reset();
    });

    // Re-attach feedback listeners after rendering
    attachFeedbackListeners();
}

/**
 * Renders the Feedback section HTML.
 * This is separated so it can be called within renderContact.
 */
function renderFeedbackSection() {
    return `
        <h2 class="text-4xl font-bold text-center mb-12 text-primary">Customer Feedback</h2>
        <div class="bg-card p-8 rounded-lg shadow-lg border border-color max-w-3xl mx-auto">
            <h3 class="text-2xl font-semibold mb-6 text-text-light">Share Your Experience</h3>
            <form id="feedback-form" class="space-y-4">
                <div>
                    <label for="feedback-rating" class="block text-sm font-medium text-text-light mb-2">Your Rating:</label>
                    <div id="star-rating" class="flex text-3xl space-x-1 cursor-pointer">
                        <i class="far fa-star text-gray-400 hover:text-yellow-400 transition-colors duration-200" data-value="1"></i>
                        <i class="far fa-star text-gray-400 hover:text-yellow-400 transition-colors duration-200" data-value="2"></i>
                        <i class="far fa-star text-gray-400 hover:text-yellow-400 transition-colors duration-200" data-value="3"></i>
                        <i class="far fa-star text-gray-400 hover:text-yellow-400 transition-colors duration-200" data-value="4"></i>
                        <i class="far fa-star text-gray-400 hover:text-yellow-400 transition-colors duration-200" data-value="5"></i>
                    </div>
                    <input type="hidden" id="rating-value" name="rating" value="0" required>
                </div>
                <div>
                    <label for="feedback-comment" class="block text-sm font-medium text-text-light mb-2">Your Comments:</label>
                    <textarea id="feedback-comment" name="comment" rows="5" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="feedback-name" class="block text-sm font-medium text-text-light mb-2">Your Name (Optional):</label>
                        <input type="text" id="feedback-name" name="name" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary">
                    </div>
                    <div>
                        <label for="feedback-email" class="block text-sm font-medium text-text-light mb-2">Your Email (Optional):</label>
                        <input type="email" id="feedback-email" name="email" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary">
                    </div>
                </div>
                <button type="submit" class="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary-dark transition-colors duration-200 transform hover:scale-105">
                    Submit Feedback
                </button>
            </form>
            <div class="mt-12">
                <h3 class="text-2xl font-semibold mb-6 text-text-light">Recent Feedback</h3>
                <div id="recent-feedback-list" class="space-y-6">
                    <div class="bg-input-bg p-4 rounded-lg border border-color">
                        <div class="flex items-center mb-2">
                            <div class="text-yellow-400 text-lg">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="ml-3 font-semibold text-text-light">John D.</span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300">"Fantastic service and a great selection of cars! Very happy with my purchase."</p>
                    </div>
                    <div class="bg-input-bg p-4 rounded-lg border border-color">
                        <div class="flex items-center mb-2">
                            <div class="text-yellow-400 text-lg">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                            </div>
                            <span class="ml-3 font-semibold text-text-light">Jane S.</span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300">"Smooth process and friendly staff. Highly recommend Pratik Automobile."</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Attaches event listeners for the feedback section (star rating and form submission).
 */
function attachFeedbackListeners() {
    const starRating = document.getElementById('star-rating');
    const ratingValueInput = document.getElementById('rating-value');
    const stars = starRating.querySelectorAll('i');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            ratingValueInput.value = value;
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.remove('far', 'text-gray-400');
                    s.classList.add('fas', 'text-yellow-400');
                } else {
                    s.classList.remove('fas', 'text-yellow-400');
                    s.classList.add('far', 'text-gray-400');
                }
            });
        });
        star.addEventListener('mouseover', () => {
            const value = parseInt(star.dataset.value);
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('text-yellow-400');
                } else {
                    s.classList.remove('text-yellow-400');
                }
            });
        });
        star.addEventListener('mouseout', () => {
            const currentValue = parseInt(ratingValueInput.value);
            stars.forEach((s, index) => {
                if (index >= currentValue) {
                    s.classList.remove('text-yellow-400');
                }
            });
        });
    });

    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const rating = ratingValueInput.value;
        const comment = document.getElementById('feedback-comment').value;
        const name = document.getElementById('feedback-name').value || 'Anonymous';
        const email = document.getElementById('feedback-email').value || 'N/A';

        if (rating === '0' || !comment) {
            showModal('Validation Error', 'Please provide a rating and your comments.');
            return;
        }

        console.log('Feedback Submitted:', { rating, comment, name, email });
        showModal('Feedback Received!', 'Thank you for your valuable feedback, ' + name + '!');
        this.reset();
        ratingValueInput.value = '0'; // Reset rating
        stars.forEach(s => {
            s.classList.remove('fas', 'text-yellow-400');
            s.classList.add('far', 'text-gray-400');
        });
    });
}


// --- Routing Logic ---
const routes = {
    '#home': renderHome,
    '#about': renderAbout,
    '#features': renderFeatures,
    '#gallery': () => renderGallery('all'),
    '#gallery-2023': () => renderGallery(2023),
    '#gallery-2022': () => renderGallery(2022),
    '#gallery-2021': () => renderGallery(2021),
    '#gallery-older': () => renderGallery('older'), // You might want to define 'older' logic, currently shows all
    '#booking': renderBooking,
    '#contact': renderContact,
    '#brand-honda': () => renderBrandPage('Honda'),
    '#brand-mitsubishi': () => renderBrandPage('Mitsubishi'),
    '#brand-toyota': () => renderBrandPage('Toyota'),
    '#brand-hyundai': () => renderBrandPage('Hyundai'),
    '#brand-porsche': () => renderBrandPage('Porsche'),
    '#brand-landrover': () => renderBrandPage('Land Rover'),
    '#brand-defenders': () => renderBrandPage('Defenders'),
    '#brand-jeep': () => renderBrandPage('Jeep'),
    '#brand-ford': () => renderBrandPage('Ford'),
    // Add more brand routes as needed
};

/**
 * Handles routing based on the URL hash.
 */
function handleRoute() {
    const hash = window.location.hash || '#home';
    const renderFunction = routes[hash];
    if (renderFunction) {
        renderFunction();
        // Close mobile nav after navigation
        if (!navContent.classList.contains('hidden')) {
            navContent.classList.add('hidden');
        }
    } else {
        // Fallback for unknown routes, or render a 404 page
        renderHome(); // Default to home
    }
    window.scrollTo(0, 0); // Scroll to top on route change
}

// --- Event Listeners ---
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => {
    setTheme(); // Set initial theme
    handleRoute(); // Load initial content based on hash
});

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
});

themeToggle.addEventListener('click', toggleTheme);

// Removed the trailing `}` that was prematurely closing the script.
