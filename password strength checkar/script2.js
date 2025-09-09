const passwordInput = document.getElementById('input');
const strengthMessage = document.getElementById('strength');

passwordInput.addEventListener('input', function () {
    let password = passwordInput.value
    let strength = calculateStrength(password)
    strengthMessage.textContent = strength.message
});

function calculateStrength(password) {
    let score = 0;

    if (password.length >= 8) score += 1

    if (/[a-z]/.test(password)) score += 1

    if (/[A-Z]/.test(password)) score += 1

    if (/\d/.test(password)) score += 1

    if (/[\W_]/.test(password)) score += 1

    switch (score) {
        case 0:
        case 1:
            return { message: "veryweak" }

        case 2:
            return { message: "weak" }

        case 3:
            return { message: "Medium" }

        case 4:
            return { message: "strong" }

        case 5:
            return {  message: "Verystrong" }

    }
}