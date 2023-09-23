import Feature from './Feature';

export default class Class {
    name: string;
    features: Feature[];

    constructor(name: string, features: Feature[] = []) {
        this.name = name;
        this.features = features;
    }
}