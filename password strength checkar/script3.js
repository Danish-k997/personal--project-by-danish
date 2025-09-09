const passwordInput = document.getElementById("input");
const strengthMessage = document.getElementById("strength");
const strengthBar = document.getElementById("strengthBar");

let strengthBarFill = document.createElement("div");
strengthBar.appendChild(strengthBarFill);

passwordInput.addEventListener("input", function () {
  let password = passwordInput.value;
  let strength = calculateStrength(password);

  strengthBarFill.style.width = strength.percent + "%";
  strengthBarFill.style.backgroundColor = strength.color;
  strengthMessage.textContent = strength.message;
});

function calculateStrength(password) {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[\W_]/.test(password)) score += 1;

  switch (score) {
    case 0:
      if (passwordInput.value === "") {
        percent = 0;
      }
    case 1:
      return { percent: 20, color: "red", message: "veryweak" };
    case 2:
      return { percent: 40, color: "orange", message: "weak" };
    case 3:
      return { percent: 60, color: "yellow", message: "Medium" };
    case 4:
      return { percent: 80, color: "lightgreen", message: "strong" };
    case 5:
      return { percent: 100, color: "green", message: "Verystrong" };
  }
}
