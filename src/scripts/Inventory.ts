import Item from './Item';
import {IDatabase} from "pg-promise";


const pgPromise = require('pg-promise');

const db : IDatabase<unknown>= pgPromise()({
    host: '161.246.127.24',
    port: 9077,
    database: 'dbitag',
    user: 'clmtbmrw30079bsmnfdwi4ovp',
    password: 'YcVOt4I2p6X3YTDXNltyKgxN'
});

export default class Inventory {
    items: Item[];
    gold : number;

    constructor(items: Item[], gold: number) {
        this.items = items;
        this.gold = gold;
    }

    async getitem() {
        try {
            await db.tx(async (t)=>{
                const query = 'select * from inventories i natural join items it'
                const value = [this.items, this.gold]
                const invendata = await t.many(query, value)
                for(const inven of invendata)
                {
                    const temp = new Item(inven.item_name, inven.item_detail)
                    this.items.push(temp)
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}