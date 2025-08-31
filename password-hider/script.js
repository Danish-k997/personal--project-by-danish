let input = document.getElementById("password");
let showPassword = document.getElementById("show-password");

showPassword.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        showPassword.src = "show-password.webp"
    } else {
        input.type = "password"
        showPassword.src = "hide-password.webp"
    }
});