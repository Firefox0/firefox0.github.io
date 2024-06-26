import * as Random from "./random";

let ultLevel: number = 0;
let circles: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("circle") as HTMLCollectionOf<HTMLElement>;

export function getUltLevel(): number {
    return ultLevel;
}

export function calculateUltDamage(currentHp: number, maximumHp: number): number {
    let damage: number;
    switch (ultLevel) {
        case 1:
            damage = 150 + 0.25 * (maximumHp - currentHp);
            break;
        case 2:
            damage = 300 + 0.3 * (maximumHp - currentHp);
            break;
        case 3:
            damage = 450 + 0.35 * (maximumHp - currentHp);
            break;
        default:
            return 0;
    }
    return Math.trunc(damage);
}

export function calculateMaximumHp(currentHp: number, finalHp: number): number {
    let damage: number;
    switch (ultLevel) {
        case 1:
            damage = (currentHp - finalHp - 150) / 0.25 + currentHp;
            break;
        case 2:
            damage = (currentHp - finalHp - 300) / 0.3 + currentHp;
            break;
        case 3:
            damage = (currentHp - finalHp - 450) / 0.35 + currentHp;
            break;
        default:
            return 0;
    }
    return Math.trunc(damage);
}

export function calculateCurrentHp(maximumHp: number, finalHp: number): number {
    let currentHp: number;
    switch (ultLevel) {
        case 1:
            currentHp = (150 + 0.25 * maximumHp + finalHp) / 1.25
            break;
        case 2:
            currentHp = (300 + 0.3 * maximumHp + finalHp) / 1.3
            break;
        case 3:
            currentHp = (450 + 0.35 * maximumHp + finalHp) / 1.35;
            break;
        default:
            return 0;
    }
    return Math.trunc(currentHp);
}

function updateUltLevel(newUltLevel: number): void {
    ultLevel = newUltLevel;
    resetCircles();
    selectCircles();
}

function resetCircles() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute("src", "../img/UltimateCircles/black_circle_color.svg");
    }
}

function selectCircles() {
    for (let i = 0; i < ultLevel; i++) {
        circles[i].setAttribute("src", "../img/UltimateCircles/yellow_circle_color.svg");
    }
}

export function randomizeUltLevel(): void {
    let newUltLevel = Random.getRandomInt(1, 3);
    if (newUltLevel === ultLevel) {
        randomizeUltLevel();
        return;
    }
    updateUltLevel(newUltLevel);
}

export function reset(): void {
    updateUltLevel(0);
}
