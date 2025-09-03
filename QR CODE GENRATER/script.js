function showQR() {
    document.getElementById('GenraterQR')
    let input = document.getElementById('input').value
    let qrbox = document.getElementById('QR')
    
    if (input === "") {
        alert("please enter a text in input box")
        return
    }

    const url = "https://api.qrserver.com/v1/create-qr-code/"
    const size = "100x100"
    const fullurl = `${url}?size= ${size}&data=${encodeURIComponent(input)}`
    qrbox.src = fullurl
    qrbox.alt = "QR code is appere here"

}
document.getElementById('GenraterQR').addEventListener('click', showQR)

let resetbtn = document.getElementById('resate')


resetbtn.addEventListener('click',function resetQR() {
    document.getElementById('input').value = "";          
  document.getElementById('QR').style.display = "none";
});
