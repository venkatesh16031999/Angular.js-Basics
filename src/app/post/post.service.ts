import { Injectable } from '@angular/core';
import { Post } from './posttype'
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class PostService{
    private posts:Post[]=[];
    private updatedPost= new Subject<Post[]>();

    constructor( private http:HttpClient ){}

     getPost(){
        const p=  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((resData:Post[])=>{
            this.posts=resData
            this.updatedPost.next([...this.posts]);
        })

    }

    getPostObserver(){
        return this.updatedPost.asObservable();
    }

    addPost(post:Post){
        this.posts.push(post);
        this.updatedPost.next([...this.posts]);
    }

    deletePost(name){
        let updatedPost=this.posts.filter(i=> i.name!=name );
        this.posts=updatedPost;
        this.updatedPost.next([...this.posts]);
    }

}