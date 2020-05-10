import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {

  constructor( public PostServiceVar: PostService ){}

  posts=[];

  ngOnInit(){
    this.posts=this.PostServiceVar.getPost();
  }

  async deletePost(name){
    await this.PostServiceVar.deletePost(name);
    this.posts=await this.PostServiceVar.getPost();
  }



}
