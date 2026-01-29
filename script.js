// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark mode toggle
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.dataset.theme =
        body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", body.dataset.theme);
});

// Load saved theme
body.dataset.theme = localStorage.getItem("theme") || "light";

// Skill animation
const skills = document.querySelectorAll(".skill-progress");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width =
                entry.target.getAttribute("data-width");
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));