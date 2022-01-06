export interface Pokemon {
    id: string;
    name: string;
    experience: string;
    img: string;
    abilities?: Abilities[];
}

interface Abilities{
    ability: {
        name: string;
    }
}