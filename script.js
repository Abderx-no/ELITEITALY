// ================================
// IELTS RESOURCES
// ================================

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
        link: "https://ieltsonlinetests.com/"
    },
    {
        name: "IELTS Liz",
        icon: "fas fa-star",
        description: "Expert IELTS tutorials, tips, and speaking practice.",
        link: "https://www.ieltsliz.com/"
    },
    {
        name: "Udemy IELTS Courses",
        icon: "fas fa-play-circle",
        description: "Affordable IELTS video courses with lifetime access and certificates.",
        link: "https://www.udemy.com/topic/ielts/"
    }
];


// ================================
// DISPLAY IELTS RESOURCES
// ================================

function displayResources() {

    const grid = document.getElementById("resourcesGrid");

    if (!grid) {
        console.error("resourcesGrid not found");
        return;
    }

    grid.innerHTML = ieltsResources.map(resource => `
        <div class="resource-card">

            <div class="resource-icon">
                <i class="${resource.icon}"></i>
            </div>

            <h3>${resource.name}</h3>

            <p>${resource.description}</p>

            <button
                type="button"
                class="resource-link"
                onclick="window.open('${resource.link}', '_blank')"
            >
                Learn More →
            </button>

        </div>
    `).join("");
}


// ================================
// SECTION NAVIGATION
// ================================

function showSection(sectionId) {

    // Hide all sections
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });


    // Find selected section
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
        console.error("Section not found:", sectionId);
        return;
    }


    // Show selected section
    targetSection.classList.add("active");


    // Remove active from navigation buttons
    const navButtons = document.querySelectorAll("nav button");

    navButtons.forEach(button => {
        button.classList.remove("active");
    });


    // Activate clicked navigation button
    navButtons.forEach(button => {

        const onclick = button.getAttribute("onclick");

        if (
            onclick &&
            onclick.includes(`showSection('${sectionId}')`)
        ) {
            button.classList.add("active");
        }

    });


    // Load Universities
    if (sectionId === "universities") {

        if (typeof displayUniversities === "function") {
            displayUniversities();
        } else {
            console.error("displayUniversities() is missing!");
        }

    }


    // Load IELTS
    if (sectionId === "ielts") {
        displayResources();
    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// FILTER UNIVERSITIES
// ================================

function filterUniversities() {

    const filterSelect =
        document.querySelector(".filter-section select");

    const maxFeeInput =
        document.getElementById("maxFee");

    if (!filterSelect || !maxFeeInput) {
        console.error("Filter elements not found");
        return;
    }

    const ieltsFilter = filterSelect.value;

    const maxFee =
        parseFloat(maxFeeInput.value) || Infinity;


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


// ================================
// RESET FILTERS
// ================================

function resetFilters() {

    const filterSelect =
        document.querySelector(".filter-section select");

    const maxFeeInput =
        document.getElementById("maxFee");


    if (filterSelect) {
        filterSelect.value = "all";
    }


    if (maxFeeInput) {
        maxFeeInput.value = "";
    }


    displayUniversities();
}


// ================================
// UNIVERSITY CONTACT
// ================================

function contactForUniversity(uniName) {

    showSection("contact");

    const form =
        document.querySelector("#contact form");

    if (form) {
        form.reset();
    }
}


// ================================
// PACKAGE CONTACT
// ================================

function contactForPackage(packageName) {

    showSection("contact");


    const packageSelect =
        document.querySelector('select[name="package"]');


    if (!packageSelect) {
        return;
    }


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


// ================================
// CONTACT FORM
// ================================

function submitForm(e) {

    e.preventDefault();


    const successMsg =
        document.getElementById("successMessage");


    if (!successMsg) {
        return;
    }


    successMsg.style.display = "block";


    e.target.reset();


    setTimeout(() => {

        successMsg.style.display = "none";

    }, 5000);
}


// ================================
// START WEBSITE
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // Load universities
    if (typeof displayUniversities === "function") {
        displayUniversities();
    }

    // Load IELTS resources
    displayResources();

});
