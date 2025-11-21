// Smooth scrolling for category buttons
document.querySelectorAll('.category-nav button').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Simple search (filters visible sections)
document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".services-section").forEach(section => {
        section.style.display =
            section.textContent.toLowerCase().includes(value)
                ? "block"
                : "none";
    });
});
