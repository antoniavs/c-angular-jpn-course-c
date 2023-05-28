import { Component, OnInit } from '@angular/core';
import { Comment } from '../Models/Comment';
import { CommentsService } from '../Services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  comments: any[] = [];
  newComment: any = {
    name: '',
    content: '',
    timestamp: null,
  };
  firebaseService: any;

  constructor() {}

  ngOnInit(): void {
    this.firebaseService.getComments().subscribe((comments: any[]) => {
      this.comments = comments;
    });
  }

  addComment(): void {
    this.newComment.timestamp = new Date().getTime();
    this.firebaseService.addComment(this.newComment).then(() => {
      this.newComment = {
        name: '',
        content: '',
        timestamp: null,
      };
    });
  }
  
};
  
