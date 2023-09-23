import Trait from "./Trait";

export default class Race {
    name: string;
    traits: Trait[];

    constructor(name:string, traits:Trait[] = []) {
        this.name = name;
        this.traits = traits;
    }
}