let selectedChoice = '';

function goToChoices() {
  window.location.href = 'choice.html';
}

function goBack() {
  window.location.href = 'index.html';
}

function selectChoice(btn, choice) {
  selectedChoice = choice;
  document.querySelectorAll('.choices button').forEach(button => button.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('submitBtn').style.display = 'inline-block';
}

function submitChoice() {
  fetch('https://formsubmit.co/ajax/nellyocharo@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ choice: selectedChoice })
  })
  .then(response => response.json())
  .then(() => {
    showPopup();
  })
  .catch(() => alert('Something went wrong.'));
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}

if (document.getElementById('submitBtn')) {
  document.getElementById('submitBtn').addEventListener('click', submitChoice);
}

