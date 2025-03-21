import instance from "./api";

export enum RickAndMortyStatus {
    ALIVE = "Alive",
    DEAD = "Dead",
    UNKNOWN = "unknown"
}

export enum RickAndMortySpecies {
    Human = "Human",
    Alien = "Alien",
    Humanoid = "Humanoid",
    Poopybutthole = "Poopybutthole",
    Mythological_Creature = "Mythological Creature",
    Animal = "Animal",
    Robot = "Robot",
    Cronenberg = "Cronenberg",
    Disease = "Disease",
    Planet = "Planet",
    Unknown = "unknown"
}

export interface RickAndMorty {
    id: number;
    name: string;
    status: RickAndMortyStatus;
    species: RickAndMortySpecies;
    image: string;
}

interface RickAndMortyInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface RickAndMortyRequestParam {
    name?: string;
    status?: RickAndMortyStatus;
    species?: RickAndMortySpecies;
    page?: number;
}

type RickAndMortyResponse = {
    info: RickAndMortyInfo;
    results: RickAndMorty[];
};

export const getRickAndMortyCharacters = async (param?: RickAndMortyRequestParam) => {
    return await instance
        .get<RickAndMortyResponse>("/character", { params: param })
        .then((response) => response.data.results);
};
