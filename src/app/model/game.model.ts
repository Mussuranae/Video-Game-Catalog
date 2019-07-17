import { ID } from '@datorama/akita';

export interface Game {
    id: ID;
    title: string;
    genre: string;
    developer: string;
    publisher: string;
    description: string;
    releaseDate: string;
    price: number;
    languages: string;
    pictureURL: string;
}
