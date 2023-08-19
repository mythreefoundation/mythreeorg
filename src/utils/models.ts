export interface Event {
    id: string;
    name: string;
    description: string;
    imageName: string;
    joiningLink: string;
    details: string;
    // date: Date;
}

export interface Book {
    name: string; // The name of the book
    groupId: string; // The group id of the book
    title: string; // The title of the book image
    description: string; // The description of the book
    author: string; // The author of the book
}

export interface MitraRashmi {
    imageName: string,
    linkToMagazine: string,
    title: string,
}

export const EventsBucket = "events"
export const BooksBucket = "books"
export const MitraRashmiBucket = "mitrarashmi"