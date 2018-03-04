import { Component, OnInit, Input } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../../models/trainer';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  // @Input() trainer: Trainer;
  trainers: Trainer[] = [];
  viewTrainer: Trainer;
  image = 'assets/images/profile.jpg';

  posts: Post[];

  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService ) {

  }

  ngOnInit() {
    this.getTrainer();
    this.route.url.subscribe(
      data => {
        this.getTrainer();
      }
    );
  }

  getTrainer(): void {
    const url = this.route.snapshot.paramMap.get('url');
    console.log('Getting url ' + url);
    this.trainerService.getTrainer(url).subscribe(
      (NewViewTrainer) => {
        this.viewTrainer = NewViewTrainer;
        this.getPosts(url);
      },
      error => {
        this.router.navigate(['/']);
      }
    );
  }

  getPosts(url: string): void {
    this.postService.getPostsByUrl(url).subscribe(
      allPosts => {
        this.posts = allPosts;
        console.log(this.posts);
      }
    );
  }
}
