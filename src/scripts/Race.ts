import Trait from "./Trait";
import {IDatabase} from "pg-promise";


const pgPromise = require('pg-promise');

const db : IDatabase<unknown>= pgPromise()({
    host: '161.246.127.24',
    port: 9077,
    database: 'dbitag',
    user: 'clmtbmrw30079bsmnfdwi4ovp',
    password: 'YcVOt4I2p6X3YTDXNltyKgxN'
});

export default class Race {
    name: string;
    traits: Trait[] = [];
    
    constructor(name:string) {
        this.name = name;
    }

    async getTrait() {
        try {
            await db.tx(async (t)=> {
                const query = 'select * from races r join trait t on (t.race_id = r.race_id) where race_name = $1';
                const value = [this.name];
                const traitdata = await t.many(query, value);
                for(const trait of traitdata)
                {
                    const temp = new Trait(trait.trait_name, trait.trait_detail);
                    this.traits.push(temp)
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}