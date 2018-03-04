import { Trainer } from "./trainer";


export class Photo {
    id: number;
    url: string;
    added: number; // epoch time
    creator: Trainer;
}