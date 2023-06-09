import Timer from "./timer.js";
import Score from "./score.js";
import Hp from "./hp.js";
import Ultimate from "./ultimate.js";
import Explanation from "./explanation.js";
import Execution from "./execution.js";
import Keyboard from "./keyboard.js";
import Settings from "./settings.js";
import Title from "./title.js";

class GarenUltTrainer {

    static newGame() {
        Title.refreshTitle(Settings.getDifficulty());
        Ultimate.randomizeUltLevel();
        Hp.newHealth(Settings.getDifficulty());

        Timer.resetTimer();
        Timer.startTimer(() => this.gameOver(Ultimate.calculateUltDamage(Hp.currentHp, Hp.maximumHp)));
    }

    static progress(answer) {
        let ultDamage = Ultimate.calculateUltDamage(Hp.currentHp, Hp.maximumHp);
        Timer.stopTimer();
        Timer.increaseOffset(0.25);
        if ((ultDamage >= Hp.currentHp) === answer) {
            Score.updateScore(Score.currentScore + 1)
            this.newGame();
        } else {
            this.gameOver(ultDamage);
        }
    }

    static gameOver(ultDamage) {
        Explanation.showExplanation(ultDamage);
        Explanation.toggleUI();
        Execution.toggleUI();
    }

    static initializeButtons() {
        Execution.initializeButtons((b) => this.progress(b));
        Explanation.initializeButton(() => {
            Explanation.toggleUI();
            Execution.toggleUI();
            if (Score.currentScore > Score.highscore) {
                Score.newHighScore(Score.currentScore);
            }
            Score.updateScore(0);
            this.newGame();
        });
        Hp.initializeButton(() => {
            Settings.toggleUI();
            Execution.toggleUI();
            Hp.toggleUI();
            this.newGame();
        });
    }

    static main() {
        this.initializeButtons();
        Keyboard.addListeners({
            "1": () => {
                Execution.yesButton.click();
            },
            "2": () => Execution.noButton.click(),
            "Enter": () => {
                Hp.startButton.click();
                Explanation.explanationButtonElement.click();
            }
        });
        Keyboard.detectWord("demacia", () => Score.newHighScore(Number.MAX_VALUE));
    }
}

window.onload = () => {
    GarenUltTrainer.main();
}
