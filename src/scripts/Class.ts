import Feature from './Feature';
import {IDatabase} from "pg-promise";
import Spell from "./Spell";


const pgPromise = require('pg-promise');

const db : IDatabase<unknown>= pgPromise()({
    host: '161.246.127.24',
    port: 9077,
    database: 'dbitag',
    user: 'clmtbmrw30079bsmnfdwi4ovp',
    password: 'YcVOt4I2p6X3YTDXNltyKgxN'
});

export default class Class {
    name: string;
    features: Feature[] = [];
    spell: Spell[] = [];

    constructor(name: string) {
        this.name = name;
    }

    async getfeature() {
        try {
            await db.tx(async (t)=> {
                const query = 'select * from classes c join feature f on (c.class_id = f.class_id) where class_name = $1'
                const value = [this.name, this.features]
                const featuredata = await t.many(query, value)
                for(const fea of featuredata)
                {
                    const temp = new Feature(fea.features_name, fea.features_detail)
                    this.features.push(temp)
                }
                console.log('getfeature load successfully.')
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    async getspell(){
        try {
            await db.tx(async (t)=>{
                const  query = 'select * from classes c join spells s on (c.classes = s.classes) where class_name = $1'
                const value = [this.name, this.spell]
                const spelldata = await t.many(query, value)
                for(const spel of spelldata)
                {
                    const temp = new Spell(spel.spell_name, spel.interval_time, spel.duration, spel.range, spel.details)
                    this.spell.push(temp)
                }
                console.log('getspell load successfully.')
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}