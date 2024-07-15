// Change header background on scroll based on theme
const header = document.querySelector('header');

function updateHeaderBackground() {
    if (window.scrollY > 50) {
        if (document.documentElement.classList.contains('dark')) {
            header.classList.add('bg-scrolled-dark');
            header.classList.remove('bg-scrolled');
        } else {
            header.classList.add('bg-scrolled');
            header.classList.remove('bg-scrolled-dark');
        }
        } else {
            header.classList.remove('bg-scrolled-dark', 'bg-scrolled');
    }
}

window.addEventListener('scroll', updateHeaderBackground);
updateHeaderBackground(); // Initial check


// Toggle mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Toggle theme between day and night
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');
const sunIconMobile = document.getElementById('sun-icon-mobile');
const moonIconMobile = document.getElementById('moon-icon-mobile');

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        sunIconMobile.classList.add('hidden');
        moonIconMobile.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
        header.classList.add('bg-scrolled-dark');
        header.classList.remove('bg-scrolled');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        sunIconMobile.classList.remove('hidden');
        moonIconMobile.classList.add('hidden');
        localStorage.setItem('theme', 'light');
        header.classList.add('bg-scrolled');
        header.classList.remove('bg-scrolled-dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Preserve theme on page reload
if (localStorage.getItem('theme') === 'dark' || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    sunIconMobile.classList.add('hidden');
    moonIconMobile.classList.remove('hidden');
}

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});