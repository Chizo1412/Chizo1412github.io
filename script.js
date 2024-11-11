// Toggle visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Copy contact information to clipboard
function copyContactInfo() {
    const contactInfo = document.getElementById("contact-info").innerText;
    navigator.clipboard.writeText(contactInfo)
        .then(() => {
            alert("Contact information copied to clipboard!");
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        });
}

// Show more/less functionality
function toggleExperienceDetails() {
    const experienceContent = document.getElementById("experience-content");
    const experienceButton = document.getElementById("experience-button");

    
    if (experienceContent.style.display === "none" || experienceContent.style.display === "") {
        experienceContent.style.display = "block";
        experienceButton.innerText = "Show Less";
    } else {
        experienceContent.style.display = "none";
        experienceButton.innerText = "Show More";
    }
}

// Initially hide extra experience content
window.onload = () => {
    document.getElementById("experience-content").style.display = "none";
    document.getElementById("about-me-content").style.display = "none";
};
