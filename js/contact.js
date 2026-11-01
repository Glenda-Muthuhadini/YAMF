const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const registrationCompetition = new URLSearchParams(window.location.search).get('competition');
const supportedCompetitions = new Set([
  'Miss Teen Elegant Limpopo',
  'Miss Teen Elegant South Africa',
  'Face of Lebowakgomo Schools',
]);
if (supportedCompetitions.has(registrationCompetition)) {
  document.querySelector('#subject').value = 'Pageants & Competitions';
  document.querySelector('#message').value = `I would like to register for ${registrationCompetition}. Please share the registration details and EFT Voting process.`;
}

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

  const body = [
    'YAMF Contact Message',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n');
  const whatsappUrl = `https://wa.me/27681570280?text=${encodeURIComponent(body)}`;
  const whatsappWindow = window.open(whatsappUrl, '_blank');

  if (!whatsappWindow) {
    formStatus.textContent = 'Your browser blocked the WhatsApp window. Allow pop-ups and submit again.';
  } else {
    whatsappWindow.opener = null;
    formStatus.textContent = '';
  }
});

document.querySelector('#partnership-button').addEventListener('click', () => {
  document.querySelector('#subject').value = 'Partnerships & Collaborations';
  document.querySelector('.contact-form-panel').scrollIntoView({ block: 'start' });
  document.querySelector('#full-name').focus({ preventScroll: true });
});
