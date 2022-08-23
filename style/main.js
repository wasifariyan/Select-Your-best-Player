function players(playerBtn, playerElementName) {
    let btn = document.getElementById(playerBtn);
    btn.addEventListener("click", function () {
        // button disable
        const buttonElement = document.getElementById(playerBtn);
        buttonElement.setAttribute("disabled", "");

        // li list created and push by selectin player
        let nameOfSelectedPlayer = playerName(playerElementName);
        let createElement = document.createElement("li");
        createElement.innerText = nameOfSelectedPlayer;

        // validation not taking more than 5
        let orderList = document.getElementById("player-list");
        if (orderList.children.length <= 4) {
            {
                orderList.append(createElement);
                let playerListNumber = orderList.children.length;
                return playerListNumber;
            }
        } else {
            alert("You Can Select Only 5");
        }
    });
}

document
    .getElementById("player-calculate")
    .addEventListener("click", function () {
        let myValue = getInputValue("per-player");
        if (isNaN(myValue)) {
            alert("please insert Amount to buy players");
            return true;
        }
        let orderList = document.getElementById("player-list");
        let totalPlayer = orderList.children.length;
        myValue.value;
        if (totalPlayer == 0) {
            alert("You have not Selected Any Player");
        }

        let totalPrice = myValue * totalPlayer;

        let playerPrice = document.getElementById("total-player-price");
        playerPrice.innerText = parseInt(totalPrice);
    });

// manager and coach area
document
    .getElementById("all-total-price")
    .addEventListener("click", function () {
        let manager = getInputValue("manager");
        let coach = getInputValue("coach");
        if (isNaN(coach)) {
            alert("please insert Amount to buy Coach");
            let subtotalString = playerName("total-player-price");
            let subtotal = parseInt(subtotalString);
            let coach = 0;
            let managerCoachCost = manager + coach;

            total = subtotal + managerCoachCost;
            let totalValueShow = document.getElementById("total-calculated");
            totalValueShow.innerText = total;
            return false;
        } else if (isNaN(manager)) {
            alert("please insert Amount to buy Manager");
            let subtotalString = playerName("total-player-price");
            let subtotal = parseInt(subtotalString);
            let manager = 0;
            let managerCoachCost = manager + coach;

            total = subtotal + managerCoachCost;
            let totalValueShow = document.getElementById("total-calculated");
            totalValueShow.innerText = total;
            return false;
        } else {
            let subtotalString = playerName("total-player-price");
            let subtotal = parseInt(subtotalString);

            let total = manager + coach + subtotal;
            let totalValueShow = document.getElementById("total-calculated");
            totalValueShow.innerText = total;
        }
    });