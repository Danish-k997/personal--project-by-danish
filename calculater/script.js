let buttons = document.querySelectorAll('.btn')
let display = document.getElementById('resualt')

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const value = button.dataset.value
        if (value === "AC") {
            display.value = "";

        } else if (value === "DC") {
            display.value = display.value.slice(0, -1)
        } else if (value === "=") {
            try {
                display.value = eval(display.value)
            }
            catch {
                display.value = "Error"
            }
        } else {

            display.value += value
        }
    })
})