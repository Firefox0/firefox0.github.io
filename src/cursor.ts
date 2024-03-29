import * as Storage from "./storage";

let body: HTMLBodyElement = document.getElementsByTagName("body")[0]!;
let buttons: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("btn") as HTMLCollectionOf<HTMLElement>;

export function updateCursor(value: number) {
    let path: string;

    switch (value) {
        case 0:
            path = "../misc/legacy.cur";
            break;
        case 1:
            path = "../misc/modern.cur";
            break;
        default:
            path = "";
            break;
    }

    let fullString = "cursor: url('" + path + "'), auto;"
    body.style.cssText += fullString;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onmouseenter = () => {
            buttons[i].style.cssText += fullString;
        };
    }

    Storage.setCursor(value);
}

(() => {
    let cursor: number | null = Storage.getCursor();
    if (cursor === null) {
        cursor = 1;
    }
    updateCursor(cursor);
})();