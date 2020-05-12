import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../posttype';
@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {

  constructor( public PostServiceVar: PostService ){}

  posts:Post[]=[];

  ngOnInit(){
    this.PostServiceVar.getPost();
    this.PostServiceVar.getPostObserver().subscribe((post : Post[])=>{
      console.log("observer",post);
      this.posts=post
    })
  }

   deletePost(name){
     this.PostServiceVar.deletePost(name);
  }



}
