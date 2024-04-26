import { Component, OnInit } from '@angular/core';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable
} from 'rxjs';
import { BlogPostsService } from './blog-posts/blog-posts.service';
import { Router, RouterOutlet } from '@angular/router';
import { BlogPost, PostData } from './blog-posts/blog-post.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPostsComponent, TypeAheadComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private blogPostsService: BlogPostsService,
    private router: Router
  ) {}
  title = 'ng-search';
  isLoading: boolean = false;

  blogPosts$ = new Observable<PostData[]>();
  searchQuery$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.blogPosts$ = combineLatest([
      this.searchQuery$,
      this.blogPostsService.data
    ]).pipe(
      debounceTime(750),
      distinctUntilChanged(),
      map(([searchQuery, data]: [string, BlogPost[]]) => {
        this.isLoading = false;

        return data.flatMap((post: BlogPost) =>
          post.data.filter((p: PostData) =>
            p.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      })
    );
  }

  filterBlogPosts(keyword: string) {
    this.isLoading = true;
    this.searchQuery$.next(keyword);

    this.router.navigate([], { queryParams: { search: keyword } });
  }
}
