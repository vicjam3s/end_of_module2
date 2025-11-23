/* ------------------------------
   GLOBAL DATA
------------------------------ */

// Pre-saved business sectors and suppliers
const businessData = [
    { sector: "Agriculture", supplier: "GreenFarm Supplies Ltd" },
    { sector: "Fashion & Clothing", supplier: "Royal Tailor Manufacturers" },
    { sector: "Electronics", supplier: "TechPro Industries" },
    { sector: "Construction", supplier: "BuildRight Cement Co." },
    { sector: "Food & Beverage", supplier: "FreshBite Manufacturers" },
    { sector: "Pharmaceuticals", supplier: "MediCare Labs" },
    { sector: "Furniture", supplier: "HomeWood Manufacturers" },
    { sector: "Cosmetics", supplier: "BeautyGlow Ltd" },
    { sector: "Automotive", supplier: "AutoWorks Factory" },
    { sector: "Stationery Supplies", supplier: "WriteWell Paper Co." }
];

/* ------------------------------
   SIMPLE PAGE SWITCHING
------------------------------ */

// Used for sign in & sign up pages
function goToMainPage() {
    window.location.href = "main.html";
}

/* ------------------------------
   SEARCH FUNCTION
------------------------------ */

function searchSector() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsBox = document.getElementById("searchResults");

    resultsBox.innerHTML = ""; // Clear old results

    if (input === "") {
        return;
    }

    const results = businessData.filter(item =>
        item.sector.toLowerCase().includes(input)
    );

    if (results.length === 0) {
        resultsBox.innerHTML = "<p>No matching businesses found.</p>";
        return;
    }

    results.forEach(result => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.textContent = `${result.sector} → Supplier: ${result.supplier}`;
        resultsBox.appendChild(div);
    });
}

/* ------------------------------
   LOAD BUSINESS TILES ON MAIN PAGE
------------------------------ */

function loadBusinessTiles() {
    const container = document.getElementById("businessTiles");

    businessData.forEach(item => {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.textContent = item.sector;
        container.appendChild(tile);
    });
}

/* ------------------------------
   MANAGEMENT PAGE LOADER
------------------------------ */

function loadManagement() {
    const team = [
        { name: "Daniel M.", role: "Founder", image: "images/m1.jpg" },
        { name: "Sarah K.", role: "Co-Founder", image: "images/m2.jpg" },
        { name: "John P.", role: "Operations Manager", image: "images/m3.jpg" }
    ];

    const container = document.getElementById("managementContainer");

    team.forEach(member => {
        const card = document.createElement("div");
        card.className = "manager-card";

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;

        container.appendChild(card);
    });
}
