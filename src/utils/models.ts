export interface Event {
    id: string;
    name: string;
    description: string;
    imageName: string;
    joiningLink: string;
    details: string;
    groupId: string;
    orderId: string;
    // date: Date;
}

export interface Book {
    id: string;
    name: string;
    groupId: string;
    imageName: string;
    description: string;
    author: string;
    publishedDate: Date
}

export interface MitraRashmi {
    id: string;
    imageName: string,
    linkToMagazine: string,
    title: string,
    publishedDate: Date
}

export interface Group {
    id: string;
    title: string,
    orderId: string
}

export const EventsBucket = "events"
export const BooksBucket = "books"
export const GroupsBucket = "groups"
export const MitraRashmiBucket = "mitrarashmi"