const passwordInput = document.getElementById('input');
const strengthMessage = document.getElementById('strength');
const strengthBar = document.getElementById('strengthBar');

const strengthBarFill = document.createElement('div');
strengthBar.appendChild(strengthBarFill);

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = calculateStrength(password);

  // Update strength bar width and color
  strengthBarFill.style.width = strength.percent + '%';
  strengthBarFill.style.backgroundColor = strength.color;

  // Update message
  strengthMessage.textContent = strength.message;
});

function calculateStrength(password) {
  let score = 0;

  // Length check
  if (password.length >= 8) score += 1;

  // Has lowercase letters
  if (/[a-z]/.test(password)) score += 1;

  // Has uppercase letters
  if (/[A-Z]/.test(password)) score += 1;

  // Has numbers
  if (/\d/.test(password)) score += 1;

  // Has special characters
  if (/[\W_]/.test(password)) score += 1;

  // Determine strength
  switch (score) {
    case 0:
    case 1:
      return { percent: 20, color: 'red', message: 'Very Weak' };
    case 2:
      return { percent: 40, color: 'orange', message: 'Weak' };
    case 3:
      return { percent: 60, color: 'yellow', message: 'Medium' };
    case 4:
      return { percent: 80, color: 'lightgreen', message: 'Strong' };
    case 5:
      return { percent: 100, color: 'green', message: 'Very Strong' };
  }
}