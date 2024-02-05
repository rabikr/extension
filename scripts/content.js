const TIME_INTERVAL = 10000;

const bonusBot = () => {
    const bonusButton = document.querySelector("button[aria-label='Claim Bonus']");
    if (bonusButton) {
        bonusButton.click();
        let totalBonusClaimed = localStorage.getItem("totalBonusClaimed") || 1;
        console.log(`Bonus claimed: ${++totalBonusClaimed}`);
        localStorage.setItem("totalBonusClaimed", ++totalBonusClaimed);
    } else {
        console.log(`No bonus available, retrying in ${TIME_INTERVAL / 1000}s.`);
    }
};

console.log("Twitch bonus auto claimer has been successfully loaded.");
setInterval(bonusBot, TIME_INTERVAL);