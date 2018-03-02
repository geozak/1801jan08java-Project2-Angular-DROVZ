import { Trainer } from './trainer';
export class Post {
    post_id: number;
    post_desc: string;
    trainer: Trainer;
    // trainer_id: number;
    post_timestamp: string;
    likers_id: number[];
}
