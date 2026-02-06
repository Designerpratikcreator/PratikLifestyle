  <script>
        // --- Data Structure for house ---
        const houseData = [
            {
                id: 'Gwarko-2022',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2022,
                features: ['Parking,Drainage,24hr water supply,business'],
                Price: 'Rs 60000000',
                image: url('/Applications/images/Honda Civic.jpg')
            },
            {
                id: 'Gwarko-2021',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2021,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 35000000',
                image: url('/Applications/images/Honda crv.jpg')
            },
            {
                id: 'Patandhoka-2020',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2020,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 35000000',
                image: url('/Applications/images/Mitsubishi pajero.jpg')
            },
            {
                id: 'Pulchowk-2023',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2023,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 35000000',
                image: url('/Applications/images/Toyota camry.jpg')
            },
            {
                id: 'Pulchowk-2022',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2022,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 45000000',
                image: url('/Applications/images/Toyota fortuner.jpg')
            },
          
            {
                id: 'Satdobato-2020',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2020,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 50000000',
                image: url('/Applications/images/Porsche 911.jpeg')
            },
            {
                id: 'Hattiban-2022',
                brand: 'Modern',
                model: 'Minimalsim',
                year: 2022,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 40000000',
                image: url('/Applications/images/Land rover.jpg') 
            },
            {
                id: 'Lagankhel-2021',
                brand: 'Modern', 
                model: 'Minimalism',
                year: 2021,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 40000000',
                image: url('/Applications/images/Defender.jpg')
            },
          
            {
                id: 'Ekantakuna-2021',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2021,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 55000000',
                image: url('/Applications/images/Toyota Prius.jpeg')
            },
            {
                id: 'Bhaisepati-2020',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2020,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 40000000',
                image: url('/Applications/images/Honda Accord 2020.jpg')
            },
            {
                id: 'Jawalakhel-2022',
                brand: 'Modern',
                model: 'Minimalism',
                year: 2022,
                features: ['Parking,Drainage,24hr water supply,business'],
                price: 'Rs 50000000',
                image: url('/Applications/images/Mitsubishi outlander.jpeg')
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
        let maxPrice = 150000; // Max price in our dataset
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
        function renderHouseCards(House) {
            if (cars.length === 0) {
                return `<p class="text-center text-xl py-10">No House found matching your criteria. Please adjust your filters.</p>`;
            }
            return cars.map(car => `
                <div class="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-color">
                    <img src="${House.image}" alt="${House.brand} ${House.model}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-primary">${House.year} ${House.brand} ${House.model}</h3>
                        <p class="text-text-light mb-4 font-bold text-lg">$${House.price.toLocaleString()}</p>
                        <ul class="text-sm text-gray-500 dark:text-gray-400 mb-4 list-disc list-inside">
                        <li>Features: ${House.features.slice(0, 2).join(', ')}${House.features.length > 2 ? '...' : ''}</li>
                        </ul>
                        <button onclick="showModal('House Details', 'More details for ${House.brand} ${House.model} will be shown here. This is a demo.')" class="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary-dark transition-colors duration-200">View Details</button>
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
                            Discover quality house from top location, meticulously inspected for your peace of mind.
                        </p>
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#gallery" class="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Browse Our House
                            </a>
                            <a href="#booking" class="bg-white text-primary py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Book a House
                            </a>
                        </div>
                    </div>
                </section>

                <section class="container mx-auto py-16 px-6">
                    <h2 class="text-4xl font-bold text-center mb-12 text-primary">Why Choose Pratik Lifestyle?</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-card p-8 rounded-lg shadow-md text-center border border-color transform hover:scale-105 transition-transform duration-300">
                            <i class="fas fa-check-circle text-5xl text-primary mb-4"></i>
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Quality Assured</h3>
                            <p class="text-gray-600 dark:text-gray-400">Every House undergoes rigorous multi-point inspection.</p>
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
                    <h2 class="text-4xl font-bold text-center mb-12 text-primary">About Pratik Lifestyle</h2>
                    <div class="bg-card p-8 rounded-lg shadow-lg border border-color max-w-4xl mx-auto">
                        <p class="text-lg leading-relaxed mb-6 text-text-light">
                            Welcome to Pratik Lifestyle, your trusted destination for high-quality house.
                            With years of experience in the realestate, we are committed to providing our customers
                            with reliable house and exceptional service. Our mission is to make your house buying journey
                            as smooth, transparent, and enjoyable as possible.
                        </p>
                        <p class="text-lg leading-relaxed mb-6 text-text-light">
                            At Pratik Lifestyle, every house in our inventory undergoes a rigorous multi-point inspection
                            by certified technicians. We ensure that each house meets our stringent standards for safety,
                            performance, and reliability before you pass your property buying. We believe in transparency,
                            providing you with comprehensive reports and detailed information about each house.
                        </p>
                        <p class="text-lg leading-relaxed text-text-light">
                            Our diverse selection includes popular location like gwarko, pulchowk, satdobato, lagankhel, ekantakuna etc. Whether you're looking for
                            a family house, a efficient pricing, or a powerful purchase, Pratik Lifestyle has something
                            to suit every need and budget. Come visit us and experience the Pratik Lifestyle difference!
                        </p>
                    </div>
                </section>
            `;
        }

       
        function renderRealestatePage(RealestateName) {
            const filteredHouse = HouseData.filter(House => House.brand === RealestateName);
            contentArea.innerHTML = `
                <section id="brand-${RealestateName.toLowerCase().replace(/\s/g, '')}" class="container mx-auto py-16 px-6">
                    <h2 class="text-4xl font-bold text-center mb-12 text-primary">${RealestateName} Realestate</h2>
                    <div class="bg-card p-8 rounded-lg shadow-lg border border-color mb-12 max-w-4xl mx-auto">
                        <p class="text-lg leading-relaxed text-text-light">
                            Explore our curated selection of high-quality ${RealestateName} House.
                            Known for their reliability, innovation, and performance, ${RealestateName} house offer exceptional value.
                            Each house has undergone our comprehensive inspection process to ensure it meets our rigorous standards.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${renderhouseCards(filteredhouse)}
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
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Rigorous Inspection</h3>
                            <p class="text-gray-600 dark:text-gray-400">Every house undergoes a meticulous check covering mechanical, electrical, and interior aspects to ensure peak condition.</p>
                        </div>
                        <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                            <i class="fas fa-shield-alt text-5xl text-primary mb-4"></i>
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Comprehensive Warranty Options</h3>
                            <p class="text-gray-600 dark:text-gray-400">Buy with confidence. We protect your investment.</p>
                        </div>
                        <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                            <i class="fas fa-file-invoice text-5xl text-primary mb-4"></i>
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Transparent housing purchase</h3>
                            <p class="text-gray-600 dark:text-gray-400">Access detailed history reports for every house, including previous ownership, service records.</p>
                        </div>
                        <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                            <i class="fas fa-handshake text-5xl text-primary mb-4"></i>
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Flexible Financing Solutions</h3>
                            <p class="text-gray-600 dark:text-gray-400">Our finance experts work with you to find the best loan options tailored to your budget.</p>
                        </div>
                        <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                            <i class="fas fa-exchange-alt text-5xl text-primary mb-4"></i>
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Trade-In Assistance</h3>
                            <p class="text-gray-600 dark:text-gray-400">Get a fair valuation for your current house and seamlessly trade it in towards your new purchase.</p>
                        </div>
                        <div class="bg-card p-8 rounded-lg shadow-md border border-color transform hover:scale-105 transition-transform duration-300">
                            <i class="fas fa-map-marker-alt text-5xl text-primary mb-4"></i>
                            <h3 class="text-2xl font-semibold mb-3 text-text-light">Nationwide purchase</h3>
                            <p class="text-gray-600 dark:text-gray-400">We offer convenient price options to bring your housing experience one of the best in Nepal.</p>
                        </div>
                    </div>
                </section>
            `;
        }

        
        function renderGallery(filterYear = 'all') {
            let filteredHouse = HouseData;

            if (filterYear !== 'all') {
                filteredHouse = filteredHouse.filter(House => House.year === parseInt(filterYear));
            }

            // Apply price filter
            filteredHouse = filteredHouse.filter(House => House.price >= currentMinPrice && car.price <= currentMaxPrice);

            contentArea.innerHTML = `
                <section id="gallery" class="container mx-auto py-16 px-6">
                    <h2 class="text-4xl font-bold text-center mb-12 text-primary">Our House Gallery</h2>
                    <div class="bg-card p-8 rounded-lg shadow-lg border border-color mb-12 max-w-4xl mx-auto">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                            <div class="w-full md:w-1/3">
                                <label for="year-filter" class="block text-sm font-medium text-text-light mb-2">Filter by Year:</label>
                                <select id="year-filter" class="block w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option value="all">All Years</option>
                                    ${[...new Set(HouseData.map(House => House.year))].sort((a, b) => b - a).map(year => `
                                        <option value="${year}" ${year == filterYear ? 'selected' : ''}>${year} Models</option>
                                    `).join('')}
                                </select>
                            </div>
                            <div class="w-full md:w-2/3 md:ml-8">
                                <label for="price-range" class="block text-sm font-medium text-text-light mb-2">Price Range: $<span id="min-price-display">${currentMinPrice.toLocaleString()}</span> - $<span id="max-price-display">${currentMaxPrice.toLocaleString()}</span></label>
                                <div class="range-slider" id="price-range-slider">
                                    <div class="range-fill"></div>
                                    <div class="range-handle left-handle" data-handle="min"></div>
                                    <div class="range-handle right-handle" data-handle="max"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-car-list">
                        ${renderHouseCards(filteredHouse)}
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
                renderGallery(document.getElementById('year-filter').value); // Re-render cars with new price filter
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
                    <h2 class="text-4xl font-bold text-center mb-12 text-primary">Book Your House</h2>
                    <div class="bg-card p-8 rounded-lg shadow-lg border border-color max-w-3xl mx-auto">
                        <form id="booking-form" class="space-y-6">
                            <!-- Step 1: House Selection (Simplified for demo) -->
                            <div>
                                <h3 class="text-2xl font-semibold mb-4 text-text-light">1. Select Your House</h3>
                                <label for="booking-Houseclass="block text-sm font-medium text-text-light mb-2">Choose a House:</label>
                                <select id="booking-House" name="House" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    <option value="">-- Select a House --</option>
                                    ${HouseData.map(House => `<option value="${House.id}">${House.year} ${House.brand} ${House.model} ($${House.price.toLocaleString()})</option>`).join('')}
                                </select>
                            </div>

                            <!-- Step 2: Client Information -->
                            <div>
                                <h3 class="text-2xl font-semibold mb-4 text-text-light">2. Your Personal Details</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label for="full-name" class="block text-sm font-medium text-text-light mb-2">Full Name:</label>
                                        <input type="text" id="full-name" name="fullName" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    </div>
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-text-light mb-2">Email Address:</label>
                                        <input type="email" id="email" name="email" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    </div>
                                    <div>
                                        <label for="phone" class="block text-sm font-medium text-text-light mb-2">Phone Number:</label>
                                        <input type="tel" id="phone" name="phone" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    </div>
                                    <div>
                                        <label for="address" class="block text-sm font-medium text-text-light mb-2">Address:</label>
                                        <input type="text" id="address" name="address" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 3: Financial Information (Client Validity) -->
                            <div>
                                <h3 class="text-2xl font-semibold mb-4 text-text-light">3. Financial & Identification</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    For House purchase validity, please provide the following documents. These will be securely handled.
                                    (Note: File uploads are for demo purposes; actual validation requires server-side processing.)
                                </p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label for="id-proof" class="block text-sm font-medium text-text-light mb-2">National ID / Passport Scan:</label>
                                        <input type="file" id="id-proof" name="idProof" accept=".pdf,.jpg,.jpeg,.png" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    </div>
                                    <div>
                                        <label for="income-proof" class="block text-sm font-medium text-text-light mb-2">Proof of Income (e.g., Salary Slip, Bank Statement):</label>
                                        <input type="file" id="income-proof" name="incomeProof" accept=".pdf,.jpg,.jpeg,.png" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <label for="payment-method" class="block text-sm font-medium text-text-light mb-2">Preferred Payment Method:</label>
                                    <select id="payment-method" name="paymentMethod" class="w-full p-3 border border-color rounded-md input-bg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                        <option value="">-- Select Method --</option>
                                        <option value="bank-transfer">Bank Transfer</option>
                                        <option value="financing">Financing Application</option>
                                        <option value="direct-payment">Direct Payment</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Step 4: Terms and Conditions -->
                            <div>
                                <h3 class="text-2xl font-semibold mb-4 text-text-light">4. Terms and Conditions</h3>
                                <div class="bg-input-bg p-4 rounded-md border border-color max-h-48 overflow-y-auto text-sm text-gray-700 dark:text-gray-300">
                                    <p class="mb-2">By submitting this booking request, you agree to the following terms:</p>
                                    <ul class="list-disc list-inside space-y-1">
                                        <li>All information provided must be accurate and truthful.</li>
                                        <li>A booking fee (if applicable) is non-refundable upon cancellation after 24 hours.</li>
                                        <li>Final House purchase is subject to a physical inspection and agreement on final terms.</li>
                                        <li>Pratik Lifestyle reserves the right to reject any booking request.</li>
                                        <li>Your data will be handled in accordance with our Privacy Policy.</li>
                                    </ul>
                                </div>
                                <div class="flex items-center mt-4">
                                    <input type="checkbox" id="terms-agree" name="termsAgree" class="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary" required>
                                    <label for="terms-agree" class="ml-2 block text-sm text-text-light">I agree to the <a href="#" class="text-primary hover:underline">Terms and Conditions</a>.</label>
                                </div>
                            </div>

                            <button type="submit" class="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary-dark transition-colors duration-200 transform hover:scale-105">
                                Submit Booking Request
                            </button>
                        </form>
                    </div>
                </section>
            `;

            document.getElementById('booking-form').addEventListener('submit', function(event) {
                event.preventDefault();
                const selectedHouse = document.getElementById('booking-car').value;
                const fullName = document.getElementById('full-name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const address = document.getElementById('address').value;
                const idProof = document.getElementById('id-proof').files[0];
                const incomeProof = document.getElementById('income-proof').files[0];
                const paymentMethod = document.getElementById('payment-method').value;
                const termsAgree = document.getElementById('terms-agree').checked;

                if (!selectedHouse || !fullName || !email || !phone || !address || !idProof || !incomeProof || !paymentMethod || !termsAgree) {
                    showModal('Validation Error', 'Please fill in all required fields and agree to the terms.');
                    return;
                }

                // Simulate form submission
                console.log('Booking Details:', {
                    selectedHouse, fullName, email, phone, address, idProof: idProof.name, incomeProof: incomeProof.name, paymentMethod, termsAgree
                });
                showModal('Booking Confirmed!', 'Thank you for your booking request! We will contact you shortly to finalize the details. Your booking ID is: ' + Math.random().toString(36).substr(2, 9).toUpperCase());
                this.reset(); // Reset the form
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
                                <p><i class="fas fa-phone-alt text-primary mr-3"></i> +977 9743246569</p>
                                <p><i class="fas fa-envelope text-primary mr-3"></i> info@pratiklifestyle.com</p>
                                <p><i class="fas fa-map-marker-alt text-primary mr-3"></i> 123 Ring Road, Lalitpur, Nepal</p>
                                <p><i class="fas fa-clock text-primary mr-3"></i> Mon - Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                            <div class="mt-8">
                                <h3 class="text-2xl font-semibold mb-4 text-text-light">Find Us on Map</h3>
                                <!-- Placeholder for Google Map embed -->
                                <div class="bg-input-bg h-64 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 border border-color">
                                    <p>Map Placeholder (e.g., Google Maps embed)</p>
                                </div>
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
                            <!-- Sample Feedback -->
                            <div class="bg-input-bg p-4 rounded-lg border border-color">
                                <div class="flex items-center mb-2">
                                    <div class="text-yellow-400 text-lg">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <span class="ml-3 font-semibold text-text-light">John D.</span>
                                </div>
                                <p class="text-gray-700 dark:text-gray-300">"Fantastic service and a great selection of House! Very happy with my purchase."</p>
                            </div>
                            <div class="bg-input-bg p-4 rounded-lg border border-color">
                                <div class="flex items-center mb-2">
                                    <div class="text-yellow-400 text-lg">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                                    </div>
                                    <span class="ml-3 font-semibold text-text-light">Jane S.</span>
                                </div>
                                <p class="text-gray-700 dark:text-gray-300">"Smooth process and friendly staff. Highly recommend Pratik Lifestyle."</p>
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
            '#gallery-older': () => renderGallery('older'), // You might want to define 'older' logic
            '#booking': renderBooking,
            '#contact': renderContact,
            '#brand-Gwarko': () => renderBrandPage('Gwarko'),
            '#brand-Patandhoka': () => renderBrandPage('Patandhoka'),
            '#brand-Pulchowk': () => renderBrandPage('Pulchowk'),
            '#brand-Jawalakhel': () => renderBrandPage('Jawalakhel'),
            '#brand-Satdobato': () => renderBrandPage('Satdobato'),
            '#brand-Lagankhel': () => renderBrandPage('Lagankhel'),
            '#brand-Hattiban': () => renderBrandPage('Hattiban'),
            '#brand-Bhaisepati': () => renderBrandPage('Bhaisepati'),
            '#brand-Ekantakuna': () => renderBrandPage('Ekantakuna'),
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
