const timeStepVirus = 150;
const speedVirus = 0.05;

const startGame = document.getElementById("startGame");
const endGame = document.getElementById("endGame");

let zPosition;

// Reset game to start
function initGame() {
    zPosition = -30;

    const allVirus = [...document.querySelectorAll("a-sphere")];

    let xPosition = -12;

    allVirus.map(virus => {
        virus.setAttribute('position', { x : xPosition, y : 1, z : zPosition });
        virus.setAttribute('scale', '1 1 1');

        xPosition += 3;
    });

    setTimeout(goViVrusGo, timeStepVirus);
}

const goViVrusGo = () => {
    const allVirus = [...document.querySelectorAll("a-sphere")];

    allVirus.map(virus => {
        const xPosition = virus.getAttribute('position').x;
        const yPosition = virus.getAttribute('position').y;

        virus.setAttribute('position', { x : xPosition, y : yPosition, z : zPosition });
    });

    // ViVRus are coming
    if(zPosition < 0) {
        zPosition += speedVirus;

        setTimeout(goViVrusGo, timeStepVirus);
    }
    else { // Game over
        endGame.style.display = "block";
    }
}
initGame();

startGame.addEventListener("click", (e) => {
    startGame.style.display = "none";
    initGame();
});

endGame.addEventListener("click", () => {
    endGame.style.display = "none";
    startGame.style.display = "block";
});
