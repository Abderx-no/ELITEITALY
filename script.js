document.addEventListener("DOMContentLoaded", function () {

    const savedSection =
        localStorage.getItem("eliteItalyCurrentSection");

    if (savedSection && document.getElementById(savedSection)) {

        showSection(savedSection, false);

    } else {

        showSection("home", false);

    }

});

// ========================================
// ADMISSION IMAGE ZOOM
// ========================================

let currentZoom = 1;

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

function openImageModal(imageSrc, caption) {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const wrapper = document.getElementById("modalImageWrapper");

    currentZoom = 1;

    modal.style.display = "flex";

    modalImg.src = imageSrc;
    modalCaption.textContent = caption;

    modalImg.style.transform = "scale(1)";

    wrapper.scrollLeft = 0;
    wrapper.scrollTop = 0;
}


function closeImageModal() {

    const modal = document.getElementById("imageModal");

    modal.style.display = "none";

    currentZoom = 1;
}


function updateZoom() {

    const img = document.getElementById("modalImage");

    img.style.transform = `scale(${currentZoom})`;
}


function zoomIn() {

    if (currentZoom < MAX_ZOOM) {

        currentZoom += ZOOM_STEP;

        updateZoom();
    }
}


function zoomOut() {

    if (currentZoom > MIN_ZOOM) {

        currentZoom -= ZOOM_STEP;

        updateZoom();
    }
}


function resetZoom() {

    currentZoom = 1;

    updateZoom();

    const wrapper = document.getElementById("modalImageWrapper");

    wrapper.scrollLeft = 0;
    wrapper.scrollTop = 0;
}
const modalWrapper = document.getElementById("modalImageWrapper");

modalWrapper.addEventListener("wheel", function(event) {

    event.preventDefault();

    if (event.deltaY < 0) {
        zoomIn();
    } else {
        zoomOut();
    }

}, { passive: false });
let isDragging = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

modalWrapper.addEventListener("mousedown", function(e) {

    isDragging = true;

    startX = e.pageX - modalWrapper.offsetLeft;
    startY = e.pageY - modalWrapper.offsetTop;

    scrollLeft = modalWrapper.scrollLeft;
    scrollTop = modalWrapper.scrollTop;

});


modalWrapper.addEventListener("mouseleave", function() {

    isDragging = false;

});


modalWrapper.addEventListener("mouseup", function() {

    isDragging = false;

});


modalWrapper.addEventListener("mousemove", function(e) {

    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - modalWrapper.offsetLeft;
    const y = e.pageY - modalWrapper.offsetTop;

    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;

    modalWrapper.scrollLeft = scrollLeft - walkX;
    modalWrapper.scrollTop = scrollTop - walkY;

});

// ===== ADMISSIONS DATA WITH REAL ADMISSION LETTERS =====
const admissions = [

{
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Palermo",
        program: "Master's Degree in System and Hospitality management ",
        degree: "Master",
        letterImage: "University of palermo.jpg",
        testimonial: "Successfully admitted to Plermo University for System and Hospitality Management studies.",
        date: "2026",
        score: "IELTS Required"
    },
{
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Napoli Federico II",
        program: "Master's degree in Science politics ",
        degree: "Master",
        letterImage: "University of napoli.jpg",
        testimonial: "Successfully admitted to Napoli University for Science politics studies.",
        date: "2026",
        score: "IELTS Not Required"
    },
{
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Tuscia",
        program: "Master's degree in Human Right ",
        degree: "Master",
        letterImage: "University of Tuscia.jpg",
        testimonial: "Successfully admitted to Tuscia University for Human Right studies.",
        date: "2026",
        score: "IELTS Not Required"
    },


    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Messina",
        program: "Bachelor's Degree Course in Business Management",
        degree: "bachelor",
        letterImage: "messina.jpg",
        testimonial: "Successfully admitted to Messina University for Business Management studies.",
        date: "2026",
        score: "IELTS Required"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Messina",
        program: "Bachelor's Degree Course in Data Analysis",
        degree: "bachelor",
        letterImage: "messina.png2.jpg",
        testimonial: "Admission confirmed for Data Analysis program at University of Messina.",
        date: "2026",
        score: "IELTS Required"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università di Pisa",
        program: "International Programme in Humanities (Master's)",
        degree: "masters",
        letterImage: "pisa.png.jpg",
        testimonial: "Accepted to University of Pisa's prestigious International Humanities program.",
        date: "2026",
        score: "Master's Program"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Napoli Federico II",
        program: "Master's Degree in Transportation Engineering and Mobility",
        degree: "masters",
        letterImage: "Naples Federico II.png.jpg",
        testimonial: "Pre-admission to Naples Federico II for Transportation Engineering program.",
        date: "2026",
        score: "Engineering Master's"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Palermo",
        program: "Bachelor's Degree in Economics and Sustainable Cooperation",
        degree: "bachelor",
        letterImage: "palermo.png.jpg",
        testimonial: "Admitted to University of Palermo's Economics program focusing on sustainable cooperation.",
        date: "2026",
        score: "Economics"
    },
    {
        name: "Student from Algeria",
        country: "Algeria",
        university: "Università degli Studi di Palermo",
        program: "Bachelor's Degree in Industrial and Information Engineering",
        degree: "bachelor",
        letterImage: "palermo.png2.jpg",
        testimonial: "Successfully admitted to Palermo University's Industrial Engineering program.",
        date: "2026",
        score: "Engineering"
    }
];

// ===== DISPLAY ADMISSIONS =====
function displayAdmissions(admissionsToShow = admissions) {
    const grid = document.getElementById("admissionsGrid");

    if (!grid) {
        console.error("admissionsGrid not found");
        return;
    }

    grid.innerHTML = admissionsToShow.map(admission => `
        <div class="admission-card">

            <div class="admission-letter-image"
                 onclick="openImageModal('${admission.letterImage}', '${admission.university}')">

                <img 
                    src="${admission.letterImage}" 
                    alt="Admission Letter"
                >

                <div class="admission-badge">
                    ${admission.degree === "masters" ? "Master's" : "Bachelor's"}
                </div>

                <div class="image-click-hint">
                    <i class="fas fa-expand"></i>
                    Click to enlarge
                </div>

            </div>

            <div class="admission-content">

                <h3>${admission.university}</h3>

                <p class="admission-country">
                    <i class="fas fa-globe"></i>
                    ${admission.country}
                </p>

                <div class="admission-details">
                    <p><strong>Program:</strong> ${admission.program}</p>
                    <p><strong>Type:</strong> ${admission.score}</p>
                    <p><strong>Year:</strong> ${admission.date}</p>
                </div>

                <p class="admission-testimonial">
                    "${admission.testimonial}"
                </p>

                <div class="admission-footer">
                    <span class="admission-year">
                        Admission ${admission.date}
                    </span>

                    <span class="admission-status">
                        <i class="fas fa-check-circle"></i> Verified
                    </span>
                </div>

            </div>
        </div>
    `).join("");
}
 
// ===== FILTER ADMISSIONS FUNCTION =====
function filterAdmissions(filter) {
    console.log("Filtering admissions by:", filter);
    let filtered = admissions;
    
    if (filter === 'masters') {
        filtered = admissions.filter(a => a.degree === 'masters');
    } else if (filter === 'bachelor') {
        filtered = admissions.filter(a => a.degree === 'bachelor');
    }
    
    displayAdmissions(filtered);
}
 
// ===== SECTION NAVIGATION =====
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
 
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add("active");
    }
 
    // Update active nav button
    document.querySelectorAll("nav .nav-btn").forEach(button => {
        button.classList.remove("active");
    });
 
    const navButtons = document.querySelectorAll("nav .nav-btn");
    navButtons.forEach(button => {
        const onclickValue = button.getAttribute("onclick");
        if (onclickValue && onclickValue.includes(`'${sectionId}'`)) {
            button.classList.add("active");
        }
    });
 
    // Load admissions when section is displayed
    if (sectionId === "admissions") {
        displayAdmissions();
    }
 
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
 
// ===== FORM SUBMISSION =====
function submitForm(e) {
    e.preventDefault();
    
    const successMsg = document.getElementById("successMessage");
    successMsg.style.display = "block";
 
    e.target.reset();
 
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 5000);
}
 
// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    displayAdmissions();
    console.log("Page initialized");
});


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



// ===== OPEN ADMISSION IMAGE =====
function openImageModal(imageSrc, caption) {

    console.log("Opening image:", imageSrc);

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    if (!modal) {
        console.error("ERROR: imageModal not found in HTML!");
        return;
    }

    if (!modalImage) {
        console.error("ERROR: modalImage not found in HTML!");
        return;
    }

    modalImage.src = imageSrc;

    if (modalCaption) {
        modalCaption.textContent = caption;
    }

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// ===== CLOSE ADMISSION IMAGE =====
function closeImageModal() {

    const modal = document.getElementById("imageModal");

    if (modal) {
        modal.style.display = "none";
    }

    document.body.style.overflow = "auto";
}


// ===== CLOSE WHEN CLICKING BACKGROUND =====
document.addEventListener("click", function(event) {

    const modal = document.getElementById("imageModal");

    if (modal && event.target === modal) {
        closeImageModal();
    }

});


// ===== CLOSE WITH ESC =====
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeImageModal();
    }

});

// ===== FILTER ADMISSIONS FUNCTION =====
function filterAdmissions(filter) {
    let filtered = admissions;
    
    if (filter === 'masters') {
        filtered = admissions.filter(a => a.degree === 'masters');
    } else if (filter === 'bachelor') {
        filtered = admissions.filter(a => a.degree === 'bachelor');
    }
    
    displayAdmissions(filtered);
}

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

    // Remember the current page/section
    localStorage.setItem("eliteItalyCurrentSection", sectionId);

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

    // Load Admissions
    if (sectionId === "admissions") {
        displayAdmissions();
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
displayAdmissions();
