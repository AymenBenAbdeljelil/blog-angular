import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent  {
  @Input() post: Post;
  onIncreaseLoveIts() {
    this.post.loveIts++;
    console.log(this.post.loveIts);
    
    
   
  }
  onDecreaseLoveIts() {
    this.post.loveIts--;
    console.log(this.post.loveIts);
    
    
  }
  getColor() {
    if(this.post.loveIts > 0)
    return 'green';
    else if(this.post.loveIts < 0)
    return 'red';

  }

  

 
}
