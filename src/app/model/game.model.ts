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
}


/*
export function createGame({
    title = '',
    genre = '',
    developer = '',
    publisher = '',
    description = '',
    releaseDate = '',
    price = 0,
    languages = '',
    }: Partial<Game>): Game {
        return {
            id: guid(),
            title,
            genre,
            developer,
            publisher,
            description,
            releaseDate,
            price,
            languages
        };
 */
