import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Ipost} from '../../interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Ipost[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe(value => this.posts = value);
  }

}
