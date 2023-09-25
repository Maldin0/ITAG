import Race from "./Race";
import Class from "./Class";
import Skill from "./Skill";
import Item from "./Item";
import {IDatabase} from "pg-promise";
import { dblClick } from "@testing-library/user-event/dist/click";

const pgPromise = require('pg-promise');

const db : IDatabase<unknown>= pgPromise()({
    host: '161.246.127.24',
    port: 9077,
    database: 'dbitag',
    user: 'clmtbmrw30079bsmnfdwi4ovp',
    password: 'YcVOt4I2p6X3YTDXNltyKgxN'
});


export default class Character {
    char_id : number | undefined;
    user_id : number | undefined;
    race : Race | undefined;
    class : Class | undefined;
    name : string | undefined;
    gold : number | undefined;
    skills : Skill[] = [];
    bag : Item[] = [];
    status : {
        dex: number;
        wis: number;
        int: number;
        str: number;
        cha: number;
        con: number;
        hp: number;
    } = {
        dex: 0,
        wis: 0,
        int: 0,
        str: 0,
        cha: 0,
        con: 0,
        hp: 0
    };
    background : string | undefined;
    active : boolean | undefined;
    
    constructor(user_id: number){
        this.user_id = user_id;
    }

    async createChar(race_id: number,class_id: number,background: string,dex: number,wis: number,int: number,str: number,cha: number,con: number,hp: number,is_active: boolean,gold: number){
        try{
            await db.tx(async (t)=>{
                const query = 'insert into characters(user_id,race_id,class_id,name,background,dex,wis,int,str,cha,con,hp,is_active,gold) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) returning cha_id'
                const value = [this.user_id,race_id,class_id,background,dex,wis,int,str,cha,con,hp,is_active,gold] 
                const Chadata = await t.one(query,value)
                await t.none("insert into inventories(item_id,cha_id) value(1,$1)",[Chadata])  
            })
        }
        catch(error){
            console.error(error)
        }
    }

    async getChar(char_id: number){
        try{
            await db.tx(async (t)=>{
                const query = 'select name,gold,background,is_active from characters where cha_id = $1' 
                const Chadata = await t.one(query,[char_id])
                this.name = Chadata.name
                this.gold = Chadata.gold
                this.background = Chadata.background
                this.active = Chadata.is_active

                const query2 = 'select race_name from characters natural join races where cha_id = $1'
                const Racedata = await t.one(query2,[char_id])
                this.race = new Race(Racedata.race_name)
                this.race.getTrait()

                const query3 = 'select class_name from characters natural join classes where cha_id = $1'
                const Classdata = await t.one(query3,[char_id])
                this.class = new Class(Classdata.class_name)
                this.class.getfeature()
                this.class.getspell()

                const query4 = 'select skill_name,skill_detail from characters natural join  skills_in_cha natural join skills where cha_id = $1'
                const Skilldata = await t.many(query4,[char_id])
                for(const skill of Skilldata){
                    this.skills.push(new Skill(skill.skill_name,skill.skill_detail))
                }

                const query5 = 'select item_name,item_detail from characters natural join  inventories natural join items where cha_id = $1'
                const Itemdata = await t.many(query5,[char_id])
                for(const item of Itemdata){
                    this.bag.push(new Item(item.item_name,item.item_detail))
                }

                const query6 = 'select dex,wis,int,str,cha,con,hp from characters where cha_id = $1'
                const Statdata = await t.one(query6,[char_id])
                this.status.dex = Statdata.dex
                this.status.wis = Statdata.wis
                this.status.int = Statdata.int
                this.status.str = Statdata.str
                this.status.cha = Statdata.cha
                this.status.con = Statdata.con
                this.status.hp = Statdata.hp


            })
        }
        catch(error){
            console.error(error)
        }
    }
}   