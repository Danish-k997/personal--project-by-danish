let input = document.getElementById('date');
let output = document.getElementById('output');
let button = document.getElementById('btn')

function calculateage() {
    let birthdate = new Date(input.value);
    let today = new Date();

    if (input.value === '' || birthdate > today) {
        output.innerHTML = 'Please enter a valid date';
        return;
    }

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    output.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;   
}

button.addEventListener('click', calculateage);



document.querySelector('.input-box').addEventListener('click', function (e) {
    
    if (e.target.tagName !== 'BUTTON') {
        document.getElementById('date').showPicker && document.getElementById('date').showPicker();
    
        document.getElementById('date').focus();
    }
});


