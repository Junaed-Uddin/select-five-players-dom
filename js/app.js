let count = 0;
const players = document.querySelectorAll('.btn');
for (const player of players) {
    player.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;
        console.log(playerName);
        count++;
        const tbody = document.getElementById('selected-players');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th>${count}</th>
            <td>${playerName}</td>
            <td><button class="bg-red-600 px-3 py-2 rounded-md">Delete</button></td>
        </tr>`
        tbody.appendChild(tr);
    })
}