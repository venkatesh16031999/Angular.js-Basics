import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class PostService{
    posts=[];

    getPost(){
        return this.posts;
    }

    addPost(post){
        this.posts.push(post);
    }

    deletePost(name){
        let updatedPost=this.posts.filter(i=> i.name!=name );
        this.posts=updatedPost;
    }

}