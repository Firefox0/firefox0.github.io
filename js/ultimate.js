import Random from "./random.js";
import Animations from "./animations.js";

export default class Ultimate {

    static ultLevelElement = document.getElementById("ultLevel");
    static ultLevel = 0;
    static ultLevelAnimation = null;

    static {
        this.ultLevelAnimation = Animations.upAndDown(this.ultLevelElement);
    }

    static getUltLevel() {
        return this.ultLevel;
    }

    static calculateUltDamage(currentHp, maximumHp) {
        switch (this.ultLevel) {
            case 1:
                return 150 + 0.25 * (maximumHp - currentHp);
            case 2:
                return 300 + 0.30 * (maximumHp - currentHp);
            case 3:
                return 450 + 0.35 * (maximumHp - currentHp);
        }
    }

    static calculateMaximumHp(currentHp, finalHp) {
        switch (this.ultLevel) {
            case 1:
                return (currentHp - finalHp - 150) / 0.25 + currentHp;
            case 2:
                return (currentHp - finalHp - 300) / 0.3 + currentHp;
            case 3:
                return (currentHp - finalHp - 450) / 3.5 + currentHp;
        }
    }

    static updateUltLevel(newUltLevel) {
        this.ultLevel = newUltLevel;
        this.ultLevelElement.innerText = newUltLevel;
        this.ultLevelAnimation.play();
    }

    static randomizeUltLevel() {
        let newUltLevel = Random.getRandomInt(1, 3);
        if (newUltLevel === this.ultLevel) {
            this.randomizeUltLevel();
            return;
        }
        this.updateUltLevel(newUltLevel);
    }
}
