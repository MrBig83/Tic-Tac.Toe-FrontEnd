var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAll } from "./connect.js";
import { ulName, ulPoints, inputs, cancelBtn, startBtn, namePlayer1, namePlayer2, fireworks } from "./hoisting.js";
import { renderBio } from "./renderBio.js";
import { startGame } from "./renderGame.js";
fireworks.style.display = "none";
function renderHighScore() {
    return __awaiter(this, void 0, void 0, function* () {
        const highScoreList = yield getAll();
        sortHighScore(highScoreList);
        ulName.innerHTML = "";
        ulName.innerHTML = `<li class="playerNameHeader">PlayerName:</li>`;
        ulPoints.innerHTML = "";
        ulPoints.innerHTML = `<li class="playerScoreHeader">Score:</li>`;
        for (const player of highScoreList) {
            const liName = document.createElement("li");
            const liPoints = document.createElement("li");
            liName.innerText = player.player;
            liPoints.innerText = player.score;
            ulName.append(liName);
            liName.addEventListener("click", () => renderBio(player.player));
            ulPoints.append(liPoints);
        }
    });
}
function renderInputBox() {
    inputs.style.display = "block";
    cancelBtn.style.display = "block";
    startBtn.style.display = "block";
    startBtn.addEventListener("click", startGame);
    cancelBtn.addEventListener("click", () => {
        hideInputBox();
    });
}
function hideInputBox() {
    namePlayer1.value = "";
    namePlayer2.value = "";
    inputs.style.display = "none";
    cancelBtn.style.display = "none";
    startBtn.style.display = "none";
}
function sortHighScore(highScoreList) {
    highScoreList.sort((a, b) => {
        if (a.score > b.score) {
            return -1;
        }
        else if (a.score < b.score) {
            return +1;
        }
        else {
            return 0;
        }
    });
}
export { renderHighScore, renderInputBox };
