function playerName(selectedName) {
    let player = document.getElementById(selectedName);
    let playerInnerTextName = player.innerText;
    return playerInnerTextName;
}

function getInputValue(inputValuePrice) {
    let inputedPrice = document.getElementById(inputValuePrice);
    let inputeValue = parseInt(inputedPrice.value);

    return inputeValue;
}