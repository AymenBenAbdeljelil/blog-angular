import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    new Post('Mon premier post', 'jjkhhkljhjhjk'),
    new Post('Mon deuxieme post', 'jjkhhkljhjhjk'),
    new Post('Encore un post', 'jjkhhkljhjhjk')

  ]
  

}
