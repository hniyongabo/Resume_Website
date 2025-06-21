

// Handle Download CV button
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    // Open the PDF CV in a new tab
    window.open("Harmony Naomi Niyongabo's Resume.pdf", '_blank');
  });
}

// Smooth scroll for internal nav links (e.g., #about, #experience)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
