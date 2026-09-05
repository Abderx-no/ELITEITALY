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
        programs: "Engineering, Business, Medicine"
    },

{
        name: "Sapienza University of Rome",
        city: "Rome",
        opens: "22 December 2026",
        closes: "15 May 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€30",
        programs: "Law, Humanities, Sciences"
    },

{
        name: "Politecnico di Torino",
        city: "Turin",
        opens: "19 December 2026",
        closes: "1 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€50",
        programs: "Engineering, Architecture, Technology"
    },

{
        name: "University of Bologna",
        city: "Bologna",
        opens: "8 October 2026",
        closes: "12 November 2026",
        ielts: true,
        minScore: "5.5",
        applicationFee: "Depends on program",
        programs: "Business, Languages, Social Sciences, Engineering"
    },

{
        name: "University of Padua",
        city: "Padua",
        opens: "15 September 2026",
        closes: "15 November 2026",
        ielts: true,
        minScore: "6.0",
        applicationFee: "€60",
        programs: "Medicine, Biology, Chemistry, Engineering"
    },

{
        name: "Bocconi University",
        city: "Milan",
        opens: "2 to 29 September 2026",
        closes: "25 November 2026 to 26 January 2027",
        ielts: true,
        minScore: "6.5",
        applicationFee: "€50",
        programs: "Business, Economics, Finance"
    },

{
        name: "University of Palermo",
        city: "Palermo",
        opens: "Check official call",
        closes: "Check official deadline",
        ielts: true,
        minScore: "5.5",
        applicationFee: "Free",
        programs: "Business, Law, Political Science, Engineering"
    },
{

        name: "University of Florence",
        city: "Florence",
        opens: "10 December 2026",
        closes: "17 April 2027",
        ielts: true,
        minScore: "N/A",
        applicationFee: "€20",
        programs: "Arts, Literature, History, Engineering"
    },

{
        name: "University of Messina",
        city: "Messina",
        opens: "24 November 2026",
        closes: "31 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Various programs"
    },

{
        name: "University of Naples Federico II",
        city: "Naples",
        opens: "Early March",
        closes: "Early May",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Literature, History, Engineering"
    },

{
        name: "University of Naples Parthenope",
        city: "Naples",
        opens: "Early February",
        closes: "Early April",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Economics"
    },

{
        name: "University of Genoa",
        city: "Genoa",
        opens: "26 November 2026",
        closes: "30 March 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30",
        programs: "Arts, Engineering, Sciences"
    },

{
        name: "Polytechnic University of Marche",
        city: "Ancona",
        opens: "16 December 2026",
        closes: "30 April 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€10",
        programs: "Engineering, Sciences, Economics"
    },

{
        name: "University of Pisa",
        city: "Pisa",
        opens: "8 July",
        closes: "31 December",
        ielts: true,
        minScore: "N/A",
        applicationFee: "Depends on program",
        programs: "Arts, Literature, History, Engineering"
    },

{
        name: "University of Udine",
        city: "Udine",
        opens: "15 February 2027",
        closes: "31 May 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20",
        programs: "Engineering, Biology, Sciences"
    },

{
        name: "University of Parma",
        city: "Parma",
        opens: "15 April 2027",
        closes: "26 June 2027",
        ielts: true,
        minScore: "6.0",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology"
    },

{
        name: "University of Trieste",
        city: "Trieste",
        opens: "15 December",
        closes: "30 April",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€40",
        programs: "Arts, Engineering, Biology"
    },

{
        name: "University of Teramo",
        city: "Teramo",
        opens: "No fixed deadline",
        closes: "No fixed deadline",
        ielts: false,
        minScore: "N/A",
        applicationFee: "Free",
        programs: "Arts, Engineering, Biology"
    },
{
        name: "University of Catania",
        city: "Catania",
        opens: "10 February 2027",
        closes: "17 March 2027",
        ielts: true,
        minScore: "N/A",
        applicationFee: "€10",
        programs: "Arts, Engineering, Biology"
    },

{
        name: "University of Cassino",
        city: "Cassino",
        opens: "Check official call",
        closes: "30 June 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€15",
        programs: "Arts, Engineering, Biology"
    } ,
{
        name: "University of Bergamo",
        city: "bergamo",
        opens: "24 November 2026",
        closes: "15 January  2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€30" ,
        programs: "Arts, Engineering, Biology"
    } ,
{
        name: "University of L'Aquila ",
        city: "L'Aquila",
        opens: "25 November 2026",
        closes: " 31 Marche 2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20" ,
        programs: "Arts, Engineering, Biology"
    },
 {
        name: "University of Basilicata ",
        city: "Basilicata",
        opens: " 03 April 2026",
        ielts: false,
        minScore: "N/A",
        applicationFee:"Free" ,
        programs: "Arts, Engineering, Biology"
    },
 {
        name: "University of Calabria",
        city: "Calabria",
        opens: "01 Fabruary 2026",
        closes: " 15 May 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "€10" ,
        programs: "Arts, Engineering, Biology"
    },
 {
        name: "University of Tuscia",
        city: "Tuscia",
        opens: "Early",
        closes: " 18 April 2027",
        ielts: false,
        minScore: "N/A",
        applicationFee: "free" ,
        programs: "Arts, Engineering, Biology"
    },
{
        name: "University of Modena and Reggio Emilia",
        city: "Modena ",
        opens: "10 February 2026",
        closes: " 30 April  2027",
        ielts: true,
        minScore: "5.5",
        applicationFee: "€20" ,
        programs: "Arts, Engineering, Biology"
    },

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

            <div>
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
