import { Component } from '@angular/core';

import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})

export class AppComponent {
  name: string;
  email: string;
  website: string;
  hobbies: string[];//los tipos son opcionales
  showHobbies: boolean;
  posts: IPost[]

  constructor(private postService:PostService){
    this.name = 'Fernando';
    this.email = "fvalverdeu@gmail.com";
    this.website = "http://www.fatzweb.com";
    this.hobbies = ["Lectura", "fútbol", "cine"];
    this.showHobbies = false;
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts as any;
    });
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby) {
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
}

interface IPost {
  id: string;
  title: string;
  body: string;
}
