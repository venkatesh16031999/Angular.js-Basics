import { Component} from '@angular/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent  {

  constructor( public PostServiceVar:PostService ){}  

name="";
comment="";

postFeed(){
    let post={
      name:this.name,
      comment:this.comment
    }
      
    this.PostServiceVar.addPost(post);

}

}
