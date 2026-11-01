const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const subject = data.get('subject');
  const message = data.get('message').trim();
  if (!name || !message) {
    formStatus.textContent = 'Please enter your name and a message.';
    document.querySelector(!name ? '#full-name' : '#message').focus();
    return;
  }

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const recipient = contactForm.getAttribute('action');
  const mailto = `${recipient}?subject=${encodeURIComponent(`YAMF: ${subject}`)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent = 'Your email draft is ready. Send it from your email app. If no app opens, email yambitiousmodelsfoundation@gmail.com directly. Your message remains here to copy.';
  window.location.href = mailto;
});

document.querySelector('#partnership-button').addEventListener('click', () => {
  document.querySelector('#subject').value = 'Partnerships & Collaborations';
  document.querySelector('.contact-form-panel').scrollIntoView({ block: 'start' });
  document.querySelector('#full-name').focus({ preventScroll: true });
});
