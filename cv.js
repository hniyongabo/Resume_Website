// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Download CV Function
const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', function() {
    // Create a simple text version of the resume
    const resumeContent = `
HARMONY NAOMI NIYONGABO - RESUME

CONTACT:
Email: hniyongabo@alustudent.com
Phone: (+250) 796176320
Location: Zindiro, Kimironko, Kigali, Rwanda

ABOUT:
I'm a passionate student at African Leadership University with extensive leadership experience and a strong commitment to environmental activism and community service.

WORK EXPERIENCE:
- Library Volunteer - ALU Library Rwanda (January 2025 - Ongoing)
- Residential Advisor - African Leadership University (September - December 2024)

EDUCATION:
- Undergraduate Studies - African Leadership University (September 2024 - Ongoing)
- Senior High School - Lycée SOS HG, Bujumbura (September 2018 - July 2021)
- DELF B2 French Diploma - Score: 90/100 (January 2022)

LEADERSHIP & ACTIVITIES:
- Environmental Activist - Beach cleanups and awareness campaigns
- Tujenge Africa Foundation Scholar (January 2022 - May 2023)
- Pan-African Youth Leadership Program (July-August 2022)
- Vice President, Journalism Club - SOS HG High School (2020-2021)

AWARDS:
- Top Student of the Year (2017/2018, 2019/2020, 2020/2021)
- Top Student in State Exam - SOS HG with 93.5% average (2021)
- Top 5 in National Test - 9th grade evaluation

SKILLS:
Leadership, Programming, Environmental Activism, Event Organization, French (DELF B2)
    `;
    
    // Create download link
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Harmony_Niyongabo_Resume.txt';
    a.click();
    window.URL.revokeObjectURL(url);
});

// Simple form validation (if contact form exists)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile menu toggle (basic)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}