import { Trainer } from './trainer';
import { Photo } from './photo';

export class Post {
    id: number;
    text: string;
    added: number; // epoch time
    creator: Trainer;
    postPhotos: Photo[];
    likedBy: Trainer[];
}
