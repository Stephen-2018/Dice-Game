let players = [];
let numPlayers = 3;

function startGame() {
    numPlayers = parseInt(document.getElementById("players").value);
    players = new Array(numPlayers).fill(0);

    let playersContainer = document.getElementById("players-container");
    playersContainer.innerHTML = "";

    for (let i = 0; i < numPlayers; i++) {
        let playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.id = `player-${i}`;
        playerDiv.textContent = `Player ${i + 1}: 🎲 Not rolled yet`;
        playersContainer.appendChild(playerDiv);
    }

    document.getElementById("winner").textContent = "";
    document.getElementById("roll-btn").disabled = false;
}

function rollDice() {
    let highestRoll = 0;
    let winners = [];

    for (let i = 0; i < numPlayers; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        players[i] = roll;

        let playerDiv = document.getElementById(`player-${i}`);
        playerDiv.textContent = `Player ${i + 1}: 🎲 Rolled ${roll}`;

        if (roll > highestRoll) {
            highestRoll = roll;
            winners = [i];
        } else if (roll === highestRoll) {
            winners.push(i);
        }
    }

    if (winners.length === 1) {
        document.getElementById("winner").textContent = `🏆 Winner: Player ${winners[0] + 1}!`;
        document.getElementById("winner").style.color = "#28a745";
        document.getElementById("roll-btn").disabled = true;
    } else {
        document.getElementById("winner").textContent = `⚠️ Tie! Players ${winners.map(i => i + 1).join(", ")} re-roll!`;
        document.getElementById("winner").style.color = "#ff9800";
    }
}
