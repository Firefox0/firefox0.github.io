import Execution from "./execution.js";
import Score from "./score.js";
import Explanation from "./explanation.js";

export default class Keyboard {
    static {
        Keyboard.addListeners({
            "1": () => {
                Execution.yesButton.click();
            },
            "2": () => Execution.noButton.click(),
            "Enter": () => {
                Execution.startButton.click();
                Explanation.explanationButtonElement.click();
            },
            "r": () => {Score.updateHighscore(0);}
        });
        Keyboard.detectWord("demacia", () => Score.updateHighscore(Number.MAX_VALUE));
    }

    static addListeners(dict) {
        document.onkeydown = (e) => {
            for (let key in dict) {
                if (e.key === key) {
                    dict[key]();
                }
            }
        } 
    }

    static detectWord(word, callback) {
        let buffer = "";
        document.onkeyup = (e) => {
            buffer += e.key;
            if (buffer.length > word.length) {
                buffer = buffer.substring(buffer.length - word.length);
            }
            if (buffer === word) {
                callback();
                this.detectWord(word, callback);
            }
        }
    }
}
