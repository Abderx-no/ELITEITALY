// University Data
const universities = [

    {
        name: "University of Milan",
        city: "Milan",
        opens: "22 January 2027",
        closes: "30 April 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€50",
        programs: "Engineering, Business, Medicine",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Data Science",
            "Business Administration",
            "International Relations",
            "Engineering"
        ]
    },

    {
        name: "Sapienza University of Rome",
        city: "Rome",
        opens: "22 December 2026",
        closes: "15 May 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€30",
        programs: "Law, Humanities, Sciences",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Medicine and Surgery",
            "Law",
            "Economics",
            "Mechanical Engineering",
            "Civil Engineering",
            "Architecture"
        ]
    },

    {
        name: "Politecnico di Torino",
        city: "Turin",
        opens: "19 December 2026",
        closes: "1 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€50",
        programs: "Engineering, Architecture, Technology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Automotive Engineering",
            "Electronic Engineering",
            "Civil Engineering",
            "Architecture",
            "Data Science"
        ]
    },

    {
        name: "University of Bologna",
        city: "Bologna",
        opens: "8 October 2026",
        closes: "12 November 2026",
        ielts: true,
        minScore: "5.5",
        applicationFee: "Depends on program",
        programs: "Business, Languages, Social Sciences, Engineering",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Economics",
            "Business Administration",
            "Mechanical Engineering",
            "Automation Engineering",
            "International Relations",
            "Languages and Literature"
        ]
    },

    {
        name: "University of Padua",
        city: "Padua",
        opens: "15 September 2026",
        closes: "15 November 2026",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€60",
        programs: "Medicine, Biology, Chemistry, Engineering",
        majors: [
            "Computer Science",
            "Medicine and Surgery",
            "Biomedical Engineering",
            "Mechanical Engineering",
            "Psychology",
            "Biology",
            "Chemistry",
            "Economics"
        ]
    },

    {
        name: "Bocconi University",
        city: "Milan",
        opens: "2 to 29 September 2026",
        closes: "25 November 2026 to 26 January 2027",
        ielts: true,
        minScore: "6.5",
        applicationFee: "€50",
        programs: "Business, Economics, Finance",
        majors: [
            "International Economics and Management",
            "Economics and Finance",
            "Business Administration",
            "Finance",
            "Data Science",
            "Artificial Intelligence",
            "International Management"
        ]
    },

    {
        name: "University of Palermo",
        city: "Palermo",
        opens: "Check official call",
        closes: "Check official deadline",
        ielts: true,
        minScore: "5.5",
        applicationFee: "Free",
        programs: "Business, Law, Political Science, Engineering",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Business Administration",
            "Economics",
            "Political Science",
            "Architecture"
        ]
    },

    {
        name: "University of Florence",
        city: "Florence",
        opens: "10 December 2026",
        closes: "17 April 2027",
        ielts: true,
        minScore: "N/A",
        applicationFee: "€20",
        programs: "Arts, Literature, History, Engineering",
        majors: [
            "Computer Science",
            "Mechanical Engineering",
            "Architecture",
            "Economics",
            "Medicine",
            "Psychology",
            "Arts and Humanities",
            "History"
        ]
    },

    {
        name: "University of Messina",
        city: "Messina",
        opens: "24 November 2026",
        closes: "31 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Various programs",
        majors: [
            "Computer Science",
            "Data Science",
            "Engineering",
            "Medicine and Surgery",
            "Economics",
            "Business Administration",
            "Political Science",
            "Psychology"
        ]
    },

    {
        name: "University of Naples Federico II",
        city: "Naples",
        opens: "Early March",
        closes: "Early May",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Literature, History, Engineering",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Aerospace Engineering",
            "Transportation Engineering",
            "Civil Engineering",
            "Medicine and Surgery",
            "Architecture",
            "Economics"
        ]
    },

    {
        name: "University of Naples Parthenope",
        city: "Naples",
        opens: "Early February",
        closes: "Early April",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Economics",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Economics",
            "Business Administration",
            "Maritime Studies",
            "Tourism Management",
            "Data Science"
        ]
    },

    {
        name: "University of Genoa",
        city: "Genoa",
        opens: "26 November 2026",
        closes: "30 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Arts, Engineering, Sciences",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Robotics Engineering",
            "Naval Engineering",
            "Electrical Engineering",
            "Architecture",
            "Economics",
            "Computer Science"
        ]
    },

    {
        name: "Polytechnic University of Marche",
        city: "Ancona",
        opens: "16 December 2026",
        closes: "30 April 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€10",
        programs: "Engineering, Sciences, Economics",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Biomedical Engineering",
            "Civil Engineering",
            "Environmental Engineering",
            "Economics",
            "Business Administration"
        ]
    },

    {
        name: "University of Pisa",
        city: "Pisa",
        opens: "8 July",
        closes: "31 December",
        ielts: true,
        minScore: "N/A",
        applicationFee: "Depends on program",
        programs: "Arts, Literature, History, Engineering",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Engineering",
            "Physics",
            "Medicine",
            "Economics",
            "Mathematics",
            "Data Science"
        ]
    },

    {
        name: "University of Udine",
        city: "Udine",
        opens: "15 February 2027",
        closes: "31 May 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Engineering, Biology, Sciences",
        majors: [
            "Computer Science",
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Economics",
            "Agricultural Sciences",
            "Biology"
        ]
    },

    {
        name: "University of Parma",
        city: "Parma",
        opens: "15 April 2027",
        closes: "26 June 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Mechanical Engineering",
            "Food Science",
            "Medicine and Surgery",
            "Economics",
            "Biotechnology",
            "Pharmaceutical Sciences"
        ]
    },

    {
        name: "University of Trieste",
        city: "Trieste",
        opens: "15 December",
        closes: "30 April",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€40",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Data Science",
            "Engineering",
            "Physics",
            "Economics",
            "International Relations",
            "Medicine",
            "Psychology"
        ]
    },

    {
        name: "University of Teramo",
        city: "Teramo",
        opens: "No fixed deadline",
        closes: "No fixed deadline",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Veterinary Medicine",
            "Food Science",
            "Economics",
            "Business Administration",
            "Political Science",
            "Law",
            "Biotechnology"
        ]
    },

    {
        name: "University of Catania",
        city: "Catania",
        opens: "10 February 2027",
        closes: "17 March 2027",
        ielts: true,
        minScore: "N/A",
        applicationFee: "€10",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Computer Engineering",
            "Mechanical Engineering",
            "Medicine and Surgery",
            "Economics",
            "Physics",
            "Biology",
            "Architecture"
        ]
    },

    {
        name: "University of Cassino",
        city: "Cassino",
        opens: "Check official call",
        closes: "30 June 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€15",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Economics",
            "Business Administration",
            "International Relations"
        ]
    },

    {
        name: "University of Bergamo",
        city: "Bergamo",
        opens: "24 November 2026",
        closes: "15 January 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Economics",
            "Business Administration",
            "International Management",
            "Computer Science",
            "Psychology"
        ]
    },

    {
        name: "University of L'Aquila",
        city: "L'Aquila",
        opens: "25 November 2026",
        closes: "31 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Computer Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Mathematics",
            "Physics"
        ]
    },

    {
        name: "University of Basilicata",
        city: "Potenza",
        opens: "3 April 2026",
        closes: "Check official deadline",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Environmental Engineering",
            "Agricultural Sciences",
            "Architecture",
            "Economics"
        ]
    },

    {
        name: "University of Calabria",
        city: "Rende",
        opens: "1 February 2026",
        closes: "15 May 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€10",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Artificial Intelligence",
            "Computer Engineering",
            "Mechanical Engineering",
            "Telecommunications Engineering",
            "Economics",
            "Data Science"
        ]
    },

    {
        name: "University of Tuscia",
        city: "Viterbo",
        opens: "Early",
        closes: "18 April 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Science",
            "Environmental Sciences",
            "Agricultural Sciences",
            "Biotechnology",
            "Economics",
            "International Relations",
            "Cultural Heritage"
        ]
    },

    {
        name: "University of Modena and Reggio Emilia",
        city: "Modena",
        opens: "10 February 2026",
        closes: "30 April 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Arts, Engineering, Biology",
        majors: [
            "Computer Engineering",
            "Artificial Intelligence",
            "Mechanical Engineering",
            "Automotive Engineering",
            "Electrical Engineering",
            "Medicine",
            "Economics",
            "Computer Science"
        ]
    },

];


// IELTS Resources
const ieltsResources = [
    {
        name: "IELTS Advantage",
        icon: "fas fa-book",
        description: "Comprehensive online course with video lessons, practice tests, and expert feedback.",
        link: "https://www.ieltsadvantage.com/"
    },
    {
        name: "British Council IELTS",
        icon: "fas fa-graduation-cap",
        description: "Official IELTS preparation materials and practice tests from the British Council.",
        link: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test"
    },
    {
        name: "IELTS Buddy",
        icon: "fas fa-users",
        description: "Free IELTS preparation resources, tips, and community support.",
        link: "https://abderx-no.github.io/IELTS-_Buddy/"
    },
    {
        name: "E2Language",
        icon: "fas fa-laptop",
        description: "Interactive online courses with live lessons and personalized feedback.",
        link: "https://engnovate.com/"
    },
    {
        name: "IELTS Liz",
        icon: "fas fa-star",
        description: "Expert YouTube channel with free tutorials and speaking practice.",
        link: "https://youtube.com/@dalilk4english?si=AyMrmemAx_cZnhs7"
    },
    {
        name: "Udemy IELTS Courses",
        icon: "fas fa-play-circle",
        description: "Affordable video courses with lifetime access and certificates.",
        link: "www.udemy.com/ielts"
    }
];

// ===== UNIVERSITY & MAJOR SELECTION FUNCTIONS =====

// Initialize Contact Section with Universities
function initializeContactSection() {
    displayCityCheckboxes();
    displayUniversitiesInContact();
}

// Get unique cities from universities
function getUniqueCities() {
    const cities = [...new Set(universities.map(uni => uni.city))];
    return cities.sort();
}

// Display City Checkboxes
function displayCityCheckboxes() {
    const citiesContainer = document.getElementById("citiesCheckboxes");
    
    if (!citiesContainer) return;

    const cities = getUniqueCities();

    citiesContainer.innerHTML = cities.map((city, index) => `
        <div style="display: flex; align-items: center; gap: 8px; padding: 8px; border-radius: 4px; cursor: pointer;">
            <input 
                type="checkbox" 
                id="city_${index}" 
                name="cities" 
                value="${city}"
                style="width: 18px; height: 18px; cursor: pointer;"
                onchange="filterUniversitiesInContact();"
            >
            <label for="city_${index}" style="cursor: pointer; margin: 0; flex: 1; font-weight: 500;">
                ${city}
            </label>
        </div>
    `).join("");
}

// Display Universities as Checkboxes in Contact Form
function displayUniversitiesInContact(unis = universities) {
    const checkboxContainer = document.getElementById("universitiesCheckboxes");
    
    if (!checkboxContainer) return;

    checkboxContainer.innerHTML = unis.map((uni, index) => `
        <div style="
            background: white;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
        " onmouseover="this.style.borderColor='var(--secondary-blue)'; this.style.boxShadow='0 2px 8px rgba(0,82,255,0.1)'" 
           onmouseout="this.style.borderColor='#ddd'; this.style.boxShadow='none'">
            <div style="display: flex; align-items: start; gap: 10px;">
                <input 
                    type="checkbox" 
                    id="uni_${index}" 
                    name="universities" 
                    value="${uni.name}"
                    style="width: 18px; height: 18px; margin-top: 2px; cursor: pointer;"
                    onchange="updateSelectedUniversities(); updateAvailableMajors();"
                >
                <label for="uni_${index}" style="cursor: pointer; flex: 1;">
                    <strong style="color: var(--primary-dark); display: block;">${uni.name}</strong>
                    <small style="color: var(--text-light);">
                        📍 ${uni.city} | 💳 ${uni.applicationFee}
                        ${uni.ielts ? ` | IELTS: ${uni.minScore}` : ' | No IELTS Required'}
                    </small>
                </label>
            </div>
        </div>
    `).join("");
}

// Filter Universities in Contact Form
function filterUniversitiesInContact() {
    const ieltsFilter = document.getElementById("ieltsFilterContact").value;
    
    // Get all selected cities
    const selectedCities = Array.from(
        document.querySelectorAll("input[name='cities']:checked")
    ).map(cb => cb.value);

    const filtered = universities.filter(uni => {
        const ieltsMatch =
            ieltsFilter === "all" ||
            (ieltsFilter === "required" && uni.ielts) ||
            (ieltsFilter === "not-required" && !uni.ielts);

        // If no cities selected, show all; otherwise show only selected cities
        const cityMatch =
            selectedCities.length === 0 ||
            selectedCities.includes(uni.city);

        return ieltsMatch && cityMatch;
    });

    displayUniversitiesInContact(filtered);
}

// Reset City Filters
function resetCityFilter() {
    // Uncheck all city checkboxes
    document.querySelectorAll("input[name='cities']").forEach(cb => {
        cb.checked = false;
    });
    
    // Display all universities again
    filterUniversitiesInContact();
}

// Update Selected Universities Display
function updateSelectedUniversities() {
    const checkboxes = document.querySelectorAll("input[name='universities']:checked");
    const selectedUnisList = document.getElementById("selectedUnisList");
    const selectedUnisSummary = document.getElementById("selectedUnisSummary");
    const selectedUnisInput = document.getElementById("selectedUnis");

    const selectedUnis = Array.from(checkboxes).map(cb => cb.value);
    selectedUnisInput.value = JSON.stringify(selectedUnis);

    if (selectedUnis.length > 0) {
        selectedUnisSummary.style.display = "block";
        selectedUnisList.innerHTML = selectedUnis.map(uni => `
            <span style="
                background: var(--secondary-blue);
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                display: inline-block;
            ">
                ${uni}
            </span>
        `).join("");
    } else {
        selectedUnisSummary.style.display = "none";
    }
}

// Update Available Majors Based on Selected Universities
function updateAvailableMajors() {
    const checkboxes = document.querySelectorAll("input[name='universities']:checked");
    const selectedUnis = Array.from(checkboxes).map(cb => cb.value);

    const majorsCheckboxes = document.getElementById("majorsCheckboxes");
    const noMajorsMessage = document.getElementById("noMajorsMessage");

    if (selectedUnis.length === 0) {
        majorsCheckboxes.innerHTML = "";
        noMajorsMessage.style.display = "block";
        return;
    }

    // Get all majors from selected universities
    const allMajors = new Set();
    universities.forEach(uni => {
        if (selectedUnis.includes(uni.name)) {
            uni.majors.forEach(major => allMajors.add(major));
        }
    });

    const sortedMajors = Array.from(allMajors).sort();

    noMajorsMessage.style.display = "none";
    majorsCheckboxes.innerHTML = sortedMajors.map((major, index) => `
        <div style="display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 4px; cursor: pointer;">
            <input 
                type="checkbox" 
                id="major_${index}" 
                name="majors" 
                value="${major}"
                style="width: 18px; height: 18px; cursor: pointer;"
                onchange="updateSelectedMajors();"
            >
            <label for="major_${index}" style="cursor: pointer; margin: 0; flex: 1;">
                ${major}
            </label>
        </div>
    `).join("");
}

// Update Selected Majors Display
function updateSelectedMajors() {
    const checkboxes = document.querySelectorAll("input[name='majors']:checked");
    const selectedMajorsList = document.getElementById("selectedMajorsList");
    const selectedMajorsSummary = document.getElementById("selectedMajorsSummary");
    const selectedMajorsInput = document.getElementById("selectedMajorsInput");

    const selectedMajors = Array.from(checkboxes).map(cb => cb.value);
    selectedMajorsInput.value = JSON.stringify(selectedMajors);

    if (selectedMajors.length > 0) {
        selectedMajorsSummary.style.display = "block";
        selectedMajorsList.innerHTML = selectedMajors.map(major => `
            <span style="
                background: #4CAF50;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                display: inline-block;
            ">
                ${major}
            </span>
        `).join("");
    } else {
        selectedMajorsSummary.style.display = "none";
    }
}

// ===== END NEW FUNCTIONS =====

// Display Universities
function displayUniversities(unis = universities) {

    const grid = document.getElementById("universitiesGrid");

    if (!grid) return;

    grid.innerHTML = unis.map(uni => `
        <div class="uni-card">

            <div class="uni-name">${uni.name}</div>

            <div class="uni-info">
                <label>📍 Location:</label> ${uni.city}
            </div>

            <div class="uni-info">
                <label>📅 Applications Open:</label>
                ${uni.opens}
            </div>

            <div class="uni-info">
                <label>⏰ Applications Close:</label>
                ${uni.closes}
            </div>

            <div class="uni-info">
                <label>💳 Application Fee:</label>
                ${uni.applicationFee}
            </div>

            <div class="uni-info">
                <label>🎓 Programs:</label>
                ${uni.programs}
            </div>

            <div class="majors-section">
                <label>📚 Popular Majors:</label>

                <div class="majors-list">
                    ${uni.majors && uni.majors.length > 0
                        ? uni.majors.map(major => `
                            <span class="major-tag">${major}</span>
                        `).join("")
                        : "<span>No majors available</span>"
                    }
                </div>
            </div>

            <div style="margin-top: 15px;">
                ${uni.ielts ? `
                    <span class="badge badge-ielts-yes">
                        IELTS Required (${uni.minScore})
                    </span>
                ` : `
                    <span class="badge badge-ielts-no">
                        IELTS Not Required
                    </span>
                `}
            </div>

            <button
                class="btn btn-secondary"
                onclick="contactForUniversity('${uni.name}')"
                style="width: 100%; margin-top: 15px;"
            >
                Get Info & Apply
            </button>

        </div>
    `).join("");
}
// Display IELTS Resources
function displayResources() {
    const grid = document.getElementById("resourcesGrid");

    if (!grid) return;

    grid.innerHTML = ieltsResources.map(resource => `
        <div class="resource-card">

            <div class="resource-icon">
                <i class="${resource.icon}"></i>
            </div>

            <h3>${resource.name}</h3>

            <p>${resource.description}</p>

            <a
                href="${resource.link}"
                target="_blank"
                class="resource-link"
            >
                Learn More →
            </a>

        </div>
    `).join("");
}
// Section Navigation
function showSection(sectionId, addToHistory = true) {

    // Hide all sections
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    // Remove active from all navigation buttons
    document.querySelectorAll("nav .nav-btn").forEach(button => {
        button.classList.remove("active");
    });

    // Find the correct navigation button
    const navButtons = document.querySelectorAll("nav .nav-btn");

    navButtons.forEach(button => {
        const onclickValue = button.getAttribute("onclick");

        if (onclickValue && onclickValue.includes(`'${sectionId}'`)) {
            button.classList.add("active");
        }
    });

    // Load Universities
    if (sectionId === "universities") {
        displayUniversities();
    }

    // Load IELTS Resources
    if (sectionId === "ielts") {
        displayResources();
    }

    // Initialize Contact Section with Universities
    if (sectionId === "contact") {
        setTimeout(() => {
            initializeContactSection();
        }, 100);
    }

    // Add section to browser history
    if (addToHistory) {
        history.pushState(
            { section: sectionId },
            "",
            "#" + sectionId
        );
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Browser Back and Forward buttons
window.addEventListener("popstate", function(event) {

    if (event.state && event.state.section) {

        showSection(
            event.state.section,
            false
        );

    } else {

        const sectionId =
            window.location.hash.replace("#", "") || "home";

        showSection(sectionId, false);
    }

});

// Filtering Universities
function filterUniversities() {

    const ieltsFilter = document.querySelector(
        ".filter-section select"
    ).value;

    const maxFee =
        parseFloat(
            document.getElementById("maxFee").value
        ) || Infinity;

    const filtered = universities.filter(uni => {

        const ieltsMatch =
            ieltsFilter === "all" ||
            (ieltsFilter === "required" && uni.ielts) ||
            (ieltsFilter === "not-required" && !uni.ielts);

        const feeMatch =
            typeof uni.applicationFee !== "number" ||
            uni.applicationFee <= maxFee;

        return ieltsMatch && feeMatch;
    });

    displayUniversities(filtered);
}
// Reset Filters
function resetFilters() {

    document.querySelector(
        ".filter-section select"
    ).value = "all";

    document.getElementById("maxFee").value = "";

    displayUniversities();
}

// Contact University - ENHANCED
function contactForUniversity(uniName) {

    showSection("contact");

    document.querySelector("form").reset();
    
    // Pre-select the university if available
    setTimeout(() => {
        const checkbox = Array.from(document.querySelectorAll("input[name='universities']")).find(cb => cb.value === uniName);
        if (checkbox) {
            checkbox.checked = true;
            updateSelectedUniversities();
            updateAvailableMajors();
        }
    }, 150);
}

// Contact Package
function contactForPackage(packageName) {

    showSection("contact");

    const packageSelect =
        document.querySelector('select[name="package"]');

    if (packageName === "Starter") {
        packageSelect.value = "starter";
    }

    if (packageName === "Complete") {
        packageSelect.value = "complete";
    }

    if (packageName === "Premium Plus") {
        packageSelect.value = "premium";
    }

    setTimeout(() => {
        initializeContactSection();
    }, 100);
}

// Form Submission - ENHANCED
function submitForm(e) {

    e.preventDefault();

    // Validate at least one university is selected
    const selectedUnis = document.querySelector("input[name='universities']:checked");
    
    if (!selectedUnis) {
        alert("Please select at least one university to apply to.");
        return;
    }

    // Get form data
    const selectedUniversities = Array.from(
        document.querySelectorAll("input[name='universities']:checked")
    ).map(cb => cb.value);

    const selectedMajors = Array.from(
        document.querySelectorAll("input[name='majors']:checked")
    ).map(cb => cb.value);

    console.log("Form Submission Data:", {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        universities: selectedUniversities,
        majors: selectedMajors,
        level: document.querySelector("select[name='level']").value,
        package: document.querySelector("select[name='package']").value
    });

    // Show success message
    const successMsg = document.getElementById("successMessage");
    successMsg.style.display = "block";

    e.target.reset();

    // Reset checkboxes visual state
    document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
    document.getElementById("selectedUnisSummary").style.display = "none";
    document.getElementById("selectedMajorsSummary").style.display = "none";
    document.getElementById("noMajorsMessage").style.display = "block";
    document.getElementById("majorsCheckboxes").innerHTML = "";

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 5000);
}

// Initialize
displayUniversities();
displayResources();
// Load the correct section on page refresh
window.addEventListener("DOMContentLoaded", function() {
    const sectionId = window.location.hash.replace("#", "") || "home";
    showSection(sectionId, false);
});
