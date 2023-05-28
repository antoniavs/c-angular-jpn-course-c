import { Component } from '@angular/core';
import { Comment } from '../Models/Comment';
import { CommentsService } from '../Services/comment.service';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent {

//addComment: any;
  //getComments: any;
  //commentsFromDB: any;

  constructor(private commentsService: CommentsService){}

  //text:string = "Text aus der Variabile";
  //showSecondRow:boolean = false;
  my_list: string[] = ['DynamicItem1', 'DynamicItem2', 'DynamicItem3', 'DynamicItem4', 'DynamicItem5']
  inputValue: string = '';
  commentsFromDB: Comment[] = [];
  newCommentName: string = '';
  newCommentContent: number = 0;
  

  getComments(){
    this.commentsService.getComment().subscribe(result=>
      {
        this.commentsFromDB = result;
      });
    }
  addComment(){
    let newComment = {Name: this.newCommentName, Content: this.newCommentContent};
    this.commentsService.addStudent(newComment);
  }
  
}
