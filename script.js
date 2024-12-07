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
  
  
  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    alert(`Message sent successfully!`);
  });

  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', (e) => {
      e.preventDefault(); 
    });
  });

  