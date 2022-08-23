
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
            targetClickEvent.style.color = '#7e7c7c';
            targetClickEvent.style.backgroundColor = '#cad4d4';
        }
        else {
            alert('You Already selected your best five');
        }

        // delete player 
        const deleteButtons = document.getElementsByClassName('delete-btn');
        for (const deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', function (event) {
                const deleteRow = event.target.parentNode.parentNode.remove(event.target);
                if (deleteRow == undefined) {
                    targetClickEvent.removeAttribute('disabled');
                    targetClickEvent.style.backgroundColor = '#6419E6';
                    targetClickEvent.style.color = 'white';
                }
            })
        }

    });
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerPerCost = getInputValueById('player-cost');
    const playersCount = document.querySelectorAll('tr');
    for (let i = 0; i < playersCount.length; i++) {
        const playerCount = playersCount[i];
        const playerCountValue = parseFloat(playerCount.childNodes[1].innerText);
        const totalPlayerCost = playerPerCost * playerCountValue;
        if (isNaN(totalPlayerCost)) {
            return;
        }
        else {
            setElementValueById('player-expenses', totalPlayerCost);
        }
    }

});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const totalPlayerExpense = parseFloat(document.getElementById('player-expenses').innerText);
    const perPlayerCost = parseFloat(document.getElementById('player-cost').value);
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');

    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert('Insert the Valid Number');
        ClearFields();
        return 0;
    }
    else if (managerCost < 0 || coachCost < 0) {
        alert('Insert the positive number');
        ClearFields();
        return;
    }
    else if (isNaN(perPlayerCost)) {
        alert('Per Player Cost is Empty');
        ClearFields();
        return;
    }
    else {
        console.log(perPlayerCost);
        const totalCost = totalPlayerExpense + managerCost + coachCost;
        setElementValueById('total-all-cost', totalCost);
    }

});


