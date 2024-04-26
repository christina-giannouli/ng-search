import { Component, Input } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { PostData } from './blog-post.interface';

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  imports: [NgFor, AsyncPipe, DatePipe],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.css'
})
export class BlogPostsComponent {
  @Input() data$!: Observable<PostData[]>;
}
