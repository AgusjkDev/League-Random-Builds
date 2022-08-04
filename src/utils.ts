import { INVALID_ITEM_COMBOS } from "./constants";

export function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomUniqueElements<T>(arr: T[], k: number): T[] {
    const elems = [...arr];
    const choices = [];

    while (choices.length < Math.min(arr.length, k)) {
        const elem = getRandomElement(elems);

        choices.push(elem);
        elems.splice(elems.indexOf(elem), 1);
    }

    return choices;
}

export const getItemAlias = (icon: string) => icon.replace(".png", "").split("/").reverse()[0];

function hasInvalidItemCombo(itemsIds: number[], invalidItemCombos: number[][]) {
    for (const invalidItemCombo of invalidItemCombos) {
        if (invalidItemCombo.every(itemId => itemsIds.includes(itemId))) return true;
    }

    return false;
}

export function getRandomItems(allItems: AllItems): Item[] {
    const boots = getRandomUniqueElements(allItems.boots, 1)[0];
    const mythic = getRandomUniqueElements(allItems.mythics, 1)[0];
    let legendaries = <Item[]>[];

    while (true) {
        legendaries = getRandomUniqueElements(allItems.legendaries, 4);

        if (
            hasInvalidItemCombo([mythic.id], INVALID_ITEM_COMBOS.mythics) ||
            hasInvalidItemCombo(
                legendaries.map(({ id }) => id),
                INVALID_ITEM_COMBOS.legendaries
            )
        ) {
            continue;
        }

        break;
    }

    return [boots, mythic, ...legendaries];
}
