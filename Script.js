// University Data
const universities = [
    {
        name: "University of Milan",
        city: "Milan",
        opens: "September 1",
        closes: "June 30",
        ielts: true,
        minScore: "6.5",
        tuition: 3500,
        programs: "Engineering, Business, Medicine"
    },
    {
        name: "University of Rome Sapienza",
        city: "Rome",
        opens: "September 15",
        closes: "July 15",
        ielts: false,
        minScore: "N/A",
        tuition: 2500,
        programs: "Law, Humanities, Sciences"
    },
    {
        name: "Politecnico di Torino",
        city: "Turin",
        opens: "September 1",
        closes: "July 1",
        ielts: true,
        minScore: "6.5",
        tuition: 3800,
        programs: "Engineering, Architecture, Technology"
    },
    {
        name: "University of Bologna",
        city: "Bologna",
        opens: "September 10",
        closes: "June 30",
        ielts: false,
        minScore: "N/A",
        tuition: 2000,
        programs: "Business, Languages, Social Sciences"
    },
    {
        name: "University of Padua",
        city: "Padua",
        opens: "September 1",
        closes: "July 31",
        ielts: true,
        minScore: "6.0",
        tuition: 2800,
        programs: "Medicine, Biology, Chemistry"
    },
    {
        name: "Bocconi University",
        city: "Milan",
        opens: "September 1",
        closes: "May 31",
        ielts: true,
        minScore: "7.0",
        tuition: 15000,
        programs: "Business, Economics, Finance"
    },
    {
        name: "LUISS University",
        city: "Rome",
        opens: "September 1",
        closes: "June 30",
        ielts: true,
        minScore: "6.5",
        tuition: 14000,
        programs: "Business, Law, Political Science"
    },
    {
        name: "University of Florence",
        city: "Florence",
        opens: "September 10",
        closes: "July 15",
        ielts: false,
        minScore: "N/A",
        tuition: 2300,
        programs: "Arts, Literature, History"
    }
];

// IELTS Resources
const ieltsResources = [
    {
        name: "IELTS Advantage",
        icon: "fas fa-book",
        description: "Comprehensive online course with video lessons, practice tests, and expert feedback.",
        link: "www.ieltsadvantage.com"
    },
    {
        name: "British Council IELTS",
        icon: "fas fa-graduation-cap",
        description: "Official IELTS preparation materials and practice tests from the British Council.",
        link: "www.britishcouncil.org/ielts"
    },
    {
        name: "IELTS Buddy",
        icon: "fas fa-users",
        description: "Free IELTS preparation resources, tips, and community support.",
        link: "www.ieltsfriend.com"
    },
    {
        name: "E2Language",
        icon: "fas fa-laptop",
        description: "Interactive online courses with live lessons and personalized feedback.",
        link: "www.e2language.com"
    },
    {
        name: "IELTS Liz",
        icon: "fas fa-star",
        description: "Expert YouTube channel with free tutorials and speaking practice.",
        link: "www.youtube.com/ieltsliz"
    },
    {
        name: "Udemy IELTS Courses",
        icon: "fas fa-play-circle",
        description: "Affordable video courses with lifetime access and certificates.",
        link: "www.udemy.com/ielts"
    }
];

// Display Universities
function displayUniversities(unis = universities) {
    const grid = document.getElementById("universitiesGrid");

    grid.innerHTML = unis.map(uni => `
        <div class="uni-card">
            <div class="uni-name">${uni.name}</div>

            <div class="uni-info">
                <label>📍 Location:</label> ${uni.city}
            </div>

            <div class="uni-info">
                <label>📅 Academic Year:</label>
                ${uni.opens} - ${uni.closes}
            </div>

            <div class="uni-info">
                <label>🎓 Programs:</label>
                ${uni.programs}
            </div>

            <div>
                ${uni.ielts ? `
                    <span class="badge badge-ielts-yes">
                        IELTS Required (${uni.minScore})
                    </span>
                ` : `
                    <span class="badge badge-ielts-no">
                        IELTS Optional
                    </span>
                `}
            </div>

            <div class="tuition-price">
                €${uni.tuition.toLocaleString()}/year
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

    grid.innerHTML = ieltsResources.map(resource => `
        <div class="resource-card">

            <div class="resource-icon">
                <i class="${resource.icon}"></i>
            </div>

            <h3>${resource.name}</h3>

            <p>${resource.description}</p>

            <a
                href="#"
                class="resource-link"
                onclick="alert('Visit ${resource.link}'); return false;"
            >
                Learn More →
            </a>

        </div>
    `).join("");
}

// Section Navigation
function showSection(sectionId) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    document.querySelectorAll("nav button").forEach(button => {
        button.classList.remove("active");
    });

    if (typeof event !== "undefined" && event.target) {
        event.target.classList.add("active");
    }

    if (sectionId === "universities") {
        displayUniversities();
    }

    if (sectionId === "ielts") {
        displayResources();
    }

    window.scrollTo(0, 0);
}

// Filtering Universities
function filterUniversities() {

    const ieltsFilter = document.querySelector("select").value;

    const maxTuition =
        parseFloat(
            document.getElementById("maxTuition").value
        ) || Infinity;

    const filtered = universities.filter(uni => {

        const ieltsMatch =
            ieltsFilter === "all" ||
            (ieltsFilter === "required" && uni.ielts) ||
            (ieltsFilter === "not-required" && !uni.ielts);

        const tuitionMatch = uni.tuition <= maxTuition;

        return ieltsMatch && tuitionMatch;
    });

    displayUniversities(filtered);
}

// Reset Filters
function resetFilters() {

    document.querySelector("select").value = "all";

    document.getElementById("maxTuition").value = "";

    displayUniversities();
}

// Contact University
function contactForUniversity(uniName) {

    showSection("contact");

    document.querySelector("form").reset();
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
}

// Form Submission
function submitForm(e) {

    e.preventDefault();

    const successMsg =
        document.getElementById("successMessage");

    successMsg.style.display = "block";

    e.target.reset();

    setTimeout(() => {

        successMsg.style.display = "none";

    }, 5000);
}

// Initialize
displayUniversities();
displayResources();