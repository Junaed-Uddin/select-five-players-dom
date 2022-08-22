function getInputValueById(inputId) {
    const inputField = parseFloat(document.getElementById(inputId).value);
    if (isNaN(inputField)) {
        alert('Input the valid Number');
        document.getElementById(inputId).value = '';
        return;
    }
    else if (inputField < 0) {
        alert('Input the positive Number');
        document.getElementById(inputId).value = '';
        return;
    }
    else {
        return inputField;
    }
}

function ClearFields() {
    document.getElementById('manager-cost').value = "";
    document.getElementById('coach-cost').value = "";
}

function setElementValueById(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}