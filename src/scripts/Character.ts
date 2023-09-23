import Race from "./Race";
import Class from "./Class";
import Skill from "./Skill";
import Inventory from "./Inventory";

export default class Character {
    char_id : number | undefined;
    user_id : number | undefined;
    race : Race | undefined;
    class : Class | undefined;
    name : string | undefined;
    skills : Skill[] | undefined;
    bag : Inventory | undefined;
    status : {
        dex: number;
        wis: number;
        int: number;
        str: number;
        cha: number;
        con: number;
        hp: number;
    } | undefined;
    background : string | undefined;
    active : boolean | undefined;

}