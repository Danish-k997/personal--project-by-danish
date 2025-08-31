let key = document.querySelector(".key")

window.addEventListener("keydown", (e)=> {
    key.innerHTML = `
    <div class="keys">
        <table>
            <tr>
            <th>key</th>
            <th>key.code</th>
            <th>key.no</th>
            </tr>
            <tr>
                <td>${e.key=== " " ? "space":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
    })