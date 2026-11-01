const entryDialog = document.querySelector('.entry-dialog');

if (entryDialog) {
  const entryForm = entryDialog.querySelector('.entry-form');
  const competitionInput = entryForm.elements.namedItem('competition');
  const birthDateInput = entryForm.elements.namedItem('dateOfBirth');
  const ageInput = entryForm.elements.namedItem('age');
  const status = entryDialog.querySelector('.entry-form-status');
  const closeButton = entryDialog.querySelector('.entry-dialog-close');
  let opener = null;
  const today = new Date();
  birthDateInput.max = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');

  function updateAge() {
    if (!birthDateInput.value) {
      ageInput.value = '';
      return;
    }

    const [year, month, day] = birthDateInput.value.split('-').map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    const birthdayHasPassed = today.getMonth() + 1 > month
      || (today.getMonth() + 1 === month && today.getDate() >= day);

    if (!birthdayHasPassed) age -= 1;
    ageInput.value = age >= 0 ? String(age) : '';
  }

  document.querySelectorAll('.competition-button[data-competition]').forEach((button) => {
    button.addEventListener('click', () => {
      opener = button;
      competitionInput.value = button.dataset.competition;
      entryForm.reset();
      competitionInput.value = button.dataset.competition;
      ageInput.value = '';
      status.textContent = '';
      entryDialog.showModal();
      entryForm.elements.namedItem('firstName').focus();
    });
  });

  birthDateInput.addEventListener('input', updateAge);
  closeButton.addEventListener('click', () => entryDialog.close());
  entryDialog.addEventListener('cancel', () => entryDialog.close());
  entryDialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') entryDialog.close();
  });
  entryDialog.addEventListener('close', () => {
    if (opener) opener.focus();
  });
  entryDialog.addEventListener('click', (event) => {
    if (event.target === entryDialog) entryDialog.close();
  });

  entryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateAge();

    if (!entryForm.reportValidity()) return;

    const fields = new FormData(entryForm);
    const message = [
      'YAMF Competition Entry',
      `Competition: ${fields.get('competition')}`,
      `First name: ${fields.get('firstName')}`,
      `Surname: ${fields.get('surname')}`,
      `Date of birth: ${fields.get('dateOfBirth')}`,
      `Age: ${fields.get('age')}`,
      `South African ID number: ${fields.get('idNumber')}`,
      `Province: ${fields.get('province')}`,
      `Town / City: ${fields.get('townCity')}`,
      `Phone / WhatsApp number: ${fields.get('phone')}`,
      `Email address: ${fields.get('email')}`,
      `Street address: ${fields.get('address')}`,
      `Why I want to join: ${fields.get('reason')}`,
    ].join('\n');
    const whatsappUrl = `https://wa.me/27681570280?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, '_blank');

    if (!whatsappWindow) {
      status.textContent = 'Your browser blocked the WhatsApp window. Allow pop-ups and submit again.';
    } else {
      whatsappWindow.opener = null;
    }
  });
}
