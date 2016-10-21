import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  posts = [];

  constructor(){

/*    this.posts.push({
      title: "afzal",
      link: "ashraf"      
    });
*/  }

  addPost(postTitle, postLink){
    this.posts.push({
      title: postTitle,
      link: postLink
    });
  }



}