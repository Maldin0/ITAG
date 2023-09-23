import Item from './Item';

export default class Inventory {
    items: Item[];
    gold : number;

    constructor(items: Item[], gold: number) {
        this.items = items;
        this.gold = gold;
    }
}