// ============================================
// TREEPRINT FORMS
// One file for every form: Enquiry, Plant a Tree and Donate.
// Each part only runs on the page that has its elements.
// ============================================


// ============================================
// SHARED HELPERS
// ============================================

// Email must look like name@site.com
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Phone number: 10 digits (spaces, dashes and brackets are ignored)
function isValidPhone(value) {
  return /^\d{10}$/.test(value.replace(/[\s\-()]/g, ''));
}

// Red message under a field
function showError(input, errorBox, message) {
  errorBox.textContent = message;
  errorBox.classList.remove('ok');
  input.classList.add('input-error');
  input.classList.remove('input-success');
}

// Green message under a field
function showOk(input, errorBox, message) {
  errorBox.textContent = message;
  errorBox.classList.add('ok');
  input.classList.remove('input-error');
  input.classList.add('input-success');
}

// Empty message and no colour on the field
function clearField(input, errorBox) {
  errorBox.textContent = '';
  errorBox.classList.remove('ok');
  input.classList.remove('input-error', 'input-success');
}

// Shows the feedback box: a title, some paragraphs, a list of details and an optional link
function showResult(box, type, header, paragraphs, details, link) {
  box.className = type;
  box.textContent = '';

  const title = document.createElement('div');
  title.className = 'result-header';
  title.textContent = header;
  box.appendChild(title);

  const body = document.createElement('div');
  body.className = 'result-details';

  paragraphs.forEach(function(text) {
    const p = document.createElement('p');
    p.textContent = text;
    body.appendChild(p);
  });

  (details || []).forEach(function(pair) {
    const p = document.createElement('p');
    const label = document.createElement('span');
    label.textContent = pair[0] + ': ';
    p.appendChild(label);
    p.appendChild(document.createTextNode(pair[1]));
    body.appendChild(p);
  });

  if (link) {
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    p.appendChild(a);
    body.appendChild(p);
  }

  box.appendChild(body);
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideResult(box) {
  box.className = '';
  box.textContent = '';
}

// Checks a name: at least 2 letters, only letters, spaces, hyphens and apostrophes
function checkName(input, errorBox, label) {
  const value = input.value.trim();
  if (value.length === 0) {
    showError(input, errorBox, label + ' is required.');
    return false;
  }
  if (value.length < 2) {
    showError(input, errorBox, label + ' must be at least 2 characters.');
    return false;
  }
  if (!/^[A-Za-zÀ-ɏ' -]+$/.test(value)) {
    showError(input, errorBox, label + ' can only contain letters.');
    return false;
  }
  showOk(input, errorBox, '✅ Looks good!');
  return true;
}

function checkEmail(input, errorBox) {
  const value = input.value.trim();
  if (!isValidEmail(value)) {
    showError(input, errorBox, 'Enter a valid email address.');
    return false;
  }
  showOk(input, errorBox, '✅ Valid email!');
  return true;
}

// Real-time version: stays quiet while the field is still empty
function liveCheck(input, errorBox, checkFunction) {
  input.addEventListener('input', function() {
    if (input.value.trim().length === 0) {
      clearField(input, errorBox);
      return;
    }
    checkFunction();
  });
}

// Today as YYYY-MM-DD (local time), used to stop dates in the future
function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return now.getFullYear() + '-' + month + '-' + day;
}

// "R50.00"
function rand(amount) {
  return 'R' + amount.toFixed(2);
}


// ============================================
// ENQUIRY FORM (enquiry.html)
// ============================================

const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
  const nameInput = document.getElementById('name');
  const surnameInput = document.getElementById('surname');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const typeSelect = document.getElementById('enquiry');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const surnameError = document.getElementById('surnameError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const enquiryResult = document.getElementById('result');

  // The phone number is optional, but if it is filled in it must be correct
  function checkPhone() {
    const value = phoneInput.value.trim();
    if (value.length === 0) {
      clearField(phoneInput, phoneError);
      return true;
    }
    if (!isValidPhone(value)) {
      showError(phoneInput, phoneError, 'Enter a valid 10-digit phone number.');
      return false;
    }
    showOk(phoneInput, phoneError, '✅ Valid phone number!');
    return true;
  }

  // Real-time validation
  liveCheck(nameInput, nameError, function() { return checkName(nameInput, nameError, 'Name'); });
  liveCheck(surnameInput, surnameError, function() { return checkName(surnameInput, surnameError, 'Surname'); });
  liveCheck(phoneInput, phoneError, checkPhone);
  liveCheck(emailInput, emailError, function() { return checkEmail(emailInput, emailError); });

  // Submit
  enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    hideResult(enquiryResult);

    // Every check runs, so all the mistakes show at the same time
    const results = [
      checkName(nameInput, nameError, 'Name'),
      checkName(surnameInput, surnameError, 'Surname'),
      checkPhone(),
      checkEmail(emailInput, emailError)
    ];

    if (results.indexOf(false) !== -1) {
      showResult(enquiryResult, 'error', '❌ Please correct the fields marked in red.', [], []);
      return;
    }

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();
    const type = typeSelect.value;

    // The details shown under the message
    const details = [['Name', name + ' ' + surname], ['Email', email]];
    if (phone) details.push(['Phone', phone]);
    details.push(['Enquiry type', type.charAt(0).toUpperCase() + type.slice(1)]);
    if (message) details.push(['Message', message]);

    // A different feedback message for volunteers and sponsors
    if (type === 'volunteer') {
      showResult(
        enquiryResult,
        'success',
        '✅ Thank you for volunteering, ' + name + '!',
        [
          'We have received your volunteer enquiry. A member of our volunteer team will email you at ' + email + ' with the next tree-planting activities and community events near you.',
          'Please bring a hat, a water bottle and closed shoes to your first event.'
        ],
        details,
        { href: 'events.html', text: 'See what our volunteers have done at recent events' }
      );
    } else {
      showResult(
        enquiryResult,
        'success',
        '✅ Thank you for offering to sponsor, ' + name + '!',
        [
          'We have received your sponsorship enquiry. Our partnerships team will email you at ' + email + ' to talk about the tree-planting projects, community programmes and environmental initiatives you can support.',
          'We usually reply within 3 working days.'
        ],
        details,
        { href: 'donate.html', text: 'Prefer to give straight away? Make a donation' }
      );
    }
  });

  // Clear Form button: the messages go away too
  enquiryForm.addEventListener('reset', function() {
    setTimeout(function() {
      [[nameInput, nameError], [surnameInput, surnameError], [phoneInput, phoneError], [emailInput, emailError]]
        .forEach(function(pair) { clearField(pair[0], pair[1]); });
      hideResult(enquiryResult);
    }, 0);
  });
}


// ============================================
// PLANT A TREE FORM (plantatree.html)
// ============================================

const plantForm = document.getElementById('plantForm');

if (plantForm) {
  const fullnameInput = document.getElementById('fullname');
  const plantEmailInput = document.getElementById('email');
  const dateInput = document.getElementById('datepl');
  const numberInput = document.getElementById('num');
  const speciesInput = document.getElementById('speciesInput');
  const commentsInput = document.getElementById('comments');
  const photoInput = document.getElementById('photo');
  const uploadBtn = document.getElementById('uploadBtn');

  const fullnameError = document.getElementById('fullnameError');
  const plantEmailError = document.getElementById('emailError');
  const dateError = document.getElementById('dateplError');
  const numberError = document.getElementById('numError');
  const speciesError = document.getElementById('speciesError');
  const photoError = document.getElementById('photoError');
  const plantResult = document.getElementById('result');

  function checkFullname() {
    const value = fullnameInput.value.trim();
    if (value.length < 3) {
      showError(fullnameInput, fullnameError, value.length === 0 ? 'Full name is required.' : 'Full name must be at least 3 characters.');
      return false;
    }
    if (!/^[A-Za-zÀ-ɏ' -]+$/.test(value)) {
      showError(fullnameInput, fullnameError, 'Full name can only contain letters.');
      return false;
    }
    showOk(fullnameInput, fullnameError, '✅ Looks good!');
    return true;
  }

  // The tree must already be planted, so the date cannot be in the future
  function checkDate() {
    const value = dateInput.value;
    if (!value) {
      showError(dateInput, dateError, 'Date planted is required.');
      return false;
    }
    if (value > todayString()) {
      showError(dateInput, dateError, 'The date cannot be in the future.');
      return false;
    }
    if (value < '1900-01-01') {
      showError(dateInput, dateError, 'Enter a date from 1900 onwards.');
      return false;
    }
    showOk(dateInput, dateError, '✅ Date saved!');
    return true;
  }

  function checkNumber() {
    const value = numberInput.value.trim();
    if (!/^\d+$/.test(value) || Number(value) < 1) {
      showError(numberInput, numberError, 'Enter a whole number of trees (1 or more).');
      return false;
    }
    if (Number(value) > 100000) {
      showError(numberInput, numberError, 'For more than 100 000 trees please contact us.');
      return false;
    }
    showOk(numberInput, numberError, '✅ Thank you!');
    return true;
  }

  // The species can be chosen from the list or typed
  function checkSpecies() {
    const value = speciesInput.value.trim();
    if (value.length < 3) {
      showError(speciesInput, speciesError, 'Choose or type a tree species.');
      return false;
    }
    showOk(speciesInput, speciesError, '✅ Species saved!');
    return true;
  }

  // The photo is optional but it must be an image
  function checkPhoto() {
    if (photoInput.files.length === 0) {
      photoError.textContent = '';
      photoError.classList.remove('ok');
      return true;
    }
    const file = photoInput.files[0];
    if (file.type.indexOf('image/') !== 0) {
      photoError.textContent = 'Please choose an image file.';
      photoError.classList.remove('ok');
      photoInput.value = '';
      return false;
    }
    photoError.textContent = '✅ ' + file.name;
    photoError.classList.add('ok');
    return true;
  }

  // The "Upload a photo" button opens the file chooser
  uploadBtn.addEventListener('click', function() {
    photoInput.click();
  });
  photoInput.addEventListener('change', checkPhoto);

  // Real-time validation
  liveCheck(fullnameInput, fullnameError, checkFullname);
  liveCheck(plantEmailInput, plantEmailError, function() { return checkEmail(plantEmailInput, plantEmailError); });
  dateInput.addEventListener('change', checkDate);
  liveCheck(numberInput, numberError, checkNumber);
  liveCheck(speciesInput, speciesError, checkSpecies);

  // Submit
  plantForm.addEventListener('submit', function(e) {
    e.preventDefault();
    hideResult(plantResult);

    const results = [
      checkFullname(),
      checkEmail(plantEmailInput, plantEmailError),
      checkDate(),
      checkNumber(),
      checkSpecies(),
      checkPhoto()
    ];

    if (results.indexOf(false) !== -1) {
      showResult(plantResult, 'error', '❌ Please correct the fields marked in red.', [], []);
      return;
    }

    const fullname = fullnameInput.value.trim();
    const email = plantEmailInput.value.trim();
    const count = Number(numberInput.value);
    const species = speciesInput.value.trim();
    const comments = commentsInput.value.trim();

    const details = [
      ['Date planted', dateInput.value],
      ['Trees planted', String(count)],
      ['Species', species]
    ];
    if (comments) details.push(['Comments', comments]);
    if (photoInput.files.length > 0) details.push(['Photo', photoInput.files[0].name]);

    showResult(
      plantResult,
      'success',
      '✅ Thank you, ' + fullname.split(' ')[0] + '! Your planting has been submitted.',
      [
        'You planted ' + count + (count === 1 ? ' tree' : ' trees') + ' (' + species + '). Our team will review your submission before it is added to the public Tree Map.',
        'We will email a confirmation to ' + email + ' once it is published.'
      ],
      details,
      { href: 'treemap.html', text: 'Explore the Tree Map' }
    );
  });

  // Clear Form button
  plantForm.addEventListener('reset', function() {
    setTimeout(function() {
      [[fullnameInput, fullnameError], [plantEmailInput, plantEmailError], [dateInput, dateError],
       [numberInput, numberError], [speciesInput, speciesError]]
        .forEach(function(pair) { clearField(pair[0], pair[1]); });
      photoError.textContent = '';
      photoError.classList.remove('ok');
      hideResult(plantResult);
    }, 0);
  });
}


// ============================================
// DONATE PAGE (donate.html)
// ============================================

const amountButtons = document.querySelectorAll('.amounts button');
const customInput = document.getElementById('amount');

if (amountButtons.length > 0 && customInput) {
  const customButton = document.querySelector('.custom-amount button');
  const amountError = document.getElementById('amountError');
  const donateResult = document.getElementById('result');

  // The thank-you message
  function thankDonor(amount) {
    const today = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
    showResult(
      donateResult,
      'success',
      '✅ Thank you for your donation of ' + rand(amount) + '!',
      [
        'Your donation has been received. It will help Treeprint support tree-planting projects, community education and environmental initiatives.',
        'Every contribution counts. Together, we can grow a greener future.'
      ],
      [['Amount', rand(amount)], ['Date', today]],
      { href: 'plantatree.html', text: 'Planted a tree yourself? Tell us about it' }
    );
  }

  // R50, R100 and R500 buttons
  amountButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      amountButtons.forEach(function(other) { other.classList.remove('selected'); });
      button.classList.add('selected');
      clearField(customInput, amountError);
      customInput.value = '';
      thankDonor(Number(button.textContent.replace(/[^\d.]/g, '')));
    });
  });

  // Checks the custom amount: 1 or more, with at most 2 decimals
  function checkAmount() {
    const value = customInput.value.trim();
    if (value.length === 0) {
      showError(customInput, amountError, 'Enter an amount of R1 or more.');
      return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      showError(customInput, amountError, 'Enter a valid amount, for example 250 or 99.50.');
      return false;
    }
    if (Number(value) < 1) {
      showError(customInput, amountError, 'The smallest donation is R1.');
      return false;
    }
    if (Number(value) > 1000000) {
      showError(customInput, amountError, 'For donations above R1 000 000 please contact us.');
      return false;
    }
    showOk(customInput, amountError, '✅ Thank you for your generosity!');
    return true;
  }

  liveCheck(customInput, amountError, checkAmount);

  // Custom "Donate" button (and the Enter key inside the amount box)
  function donateCustom() {
    hideResult(donateResult);
    if (!checkAmount()) return;
    amountButtons.forEach(function(other) { other.classList.remove('selected'); });
    thankDonor(Number(customInput.value));
    customInput.value = '';
    clearField(customInput, amountError);
  }

  customButton.addEventListener('click', donateCustom);
  customInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      donateCustom();
    }
  });
}
