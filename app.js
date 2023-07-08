const planetButton = document.getElementById('planet');
const planetChunksText = document.getElementById('chunks-count');
const autoclickUpg = document.getElementById('upgrade-autoclick');
const multiUpg = document.getElementById('upgrade-multi');
const autoclickText = document.getElementById('autoclicker');
const multiText = document.getElementById('multiplier');

let autoClickersCount = 0;
let multiCount = 0;
let multiIncrease = 0;
let planetChunks = parseFloat((0).toFixed(2));
let autoclickUpgCost = 10;
let multiUpgCost = 10;
let costMulti = 1.1;
let autoClickerPurchased = false;
let autoClickerMath = 0;

planetButton.addEventListener('click', planetClick);



autoclickUpg.addEventListener('click', function () {
	if (planetChunks >= autoclickUpgCost) {
		autoClickersCount++;
		planetChunks -= autoclickUpgCost;
		autoclickUpgCost *= costMulti;
		autoclickText.innerText = `Autoclickers: ${autoClickersCount}`;
		autoclickUpg.innerText = `Upgrade: ${parseFloat((autoclickUpgCost).toFixed(2))}`;
		planetChunksText.innerText = `Planet Chunks: ${parseFloat((planetChunks).toFixed(2))}`;
		startAutoClickers();
	}
});
function planetClick() {
	if (multiCount == 0) {
		planetChunks++;
	} else {
		planetChunks += 1 * multiIncrease;
	}
	planetChunksText.innerText = `Planet Chunks: ${parseFloat((planetChunks).toFixed(2))}`;
}


multiUpg.addEventListener('click', function () {
	if (planetChunks >= multiUpgCost) {
		multiCount++;
		planetChunks -= multiUpgCost;
		multiUpgCost *= costMulti;
		multiIncrease = (1 + 0.1 * multiCount);
		multiText.innerText = `Clicker Multi: ${multiCount} (${parseFloat((multiIncrease).toFixed(2))})`;
		multiUpg.innerText = `Upgrade: ${multiUpgCost.toFixed(1)}`;
		planetChunksText.innerText = `Planet Chunks: ${parseFloat((planetChunks).toFixed(2))}`;
	}
});

function simAutoClickers() {
	if (multiIncrease == 0) {
		autoClickerMath += autoClickersCount
	} else {
	autoClickerMath += autoClickersCount * multiIncrease; 
	}
	const intClicks = Math.floor(autoClickerMath);
	planetChunks += intClicks;
	autoClickerMath -= intClicks;
	planetChunksText.innerText = `Planet Chunks: ${parseFloat((planetChunks).toFixed(2))}`;
}
function startAutoClickers() {
	if (autoClickersCount > 0 && !autoClickerPurchased) {
		autoClickerPurchased = true;
		simAutoClickers();
		setInterval(simAutoClickers, 1000);
	}
}
const body = document.querySelector('body');
body.addEventListener('click', function() {
	console.log(multiIncrease);
})