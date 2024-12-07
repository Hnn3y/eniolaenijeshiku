// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
  
  // Contact Form
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting me! I will respond shortly.');
  });
  