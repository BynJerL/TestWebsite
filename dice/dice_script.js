var dice_limit = 10;

function rollDice() {
    // Animate the dice
    document.getElementById("roll-button").disabled = true;

    for (var i = 0; i < 20; i++) {
        setTimeout(function () {
            var dice = Math.floor(Math.random() * dice_limit) + 1;
            document.getElementById("dice-value").innerHTML = dice;
        }, i * 100);
    }

    setTimeout(function () {
        document.getElementById("roll-button").disabled = false;
    }, 2000);

}