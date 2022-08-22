
const players = document.querySelectorAll('.btn');
for (const player of players) {
    player.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;
        const tbody = document.getElementById('selected-players');
        let rowNumber = tbody.childElementCount + 1;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th>${rowNumber}</th>
            <td>${playerName}</td>
            <td><button class="bg-red-600 px-3 py-2 rounded-md delete-btn">Delete</button></td>
        </tr>`

        const targetClickEvent = event.target;
        if (rowNumber <= 5) {
            tbody.appendChild(tr);
            targetClickEvent.setAttribute('disabled', true);
        }

        // delete player 
        const deleteButtons = document.getElementsByClassName('delete-btn');
        for (const deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', function (event) {
                const deleteRow = event.target.parentNode.parentNode.remove(event.target);
                if (deleteRow == undefined) {
                    targetClickEvent.removeAttribute('disabled');
                }
            })
        }

    });
}

function getInputValueById(inputId) {
    const inputField = parseFloat(document.getElementById(inputId).value);
    return inputField;
}

function setElementValueById(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerPerCost = getInputValueById('player-cost');
    const playersCount = document.querySelectorAll('tr');
    for (let i = 0; i < playersCount.length; i++) {
        const playerCount = playersCount[i];
        const playerCountValue = playerCount.childNodes[1].innerText;
        const totalPlayerCost = playerPerCost * playerCountValue;
        setElementValueById('player-expenses', totalPlayerCost);
    }
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const totalPlayerExpense = parseFloat(document.getElementById('player-expenses').innerText);
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    const totalCost = totalPlayerExpense + managerCost + coachCost;
    setElementValueById('total-all-cost', totalCost);
})

