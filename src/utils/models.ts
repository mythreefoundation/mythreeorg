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
    id: string;
    name: string;
    groupId: string;
    imageName: string;
    description: string;
    author: string;
}

export interface MitraRashmi {
    id: string;
    imageName: string,
    linkToMagazine: string,
    title: string,
}

export interface Group {
    id: string;
    title: string,
}

export const EventsBucket = "events"
export const BooksBucket = "books"
export const GroupsBucket = "groups"
export const MitraRashmiBucket = "mitrarashmi"