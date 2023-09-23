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
    traits: Trait[];
    async constructor(name:string = 'Human', traits:Trait[] = []) {
        try {
            this.name = name;

            await db.tx(async (t) => {
                const query = 'SELECT trait_name, trait_detail FROM traits where race_id = $2';

                const traitsData = await t.many(query, [this.name, asd]);

                for (const trait of traitsData) {
                    this.traits.push(new Trait(trait.trait_name, trait.trait_detail));
                }
            })


        }
    }
}