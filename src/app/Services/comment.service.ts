import {Injectable} from '@angular/core';
import {collectionData,collection, Firestore, addDoc} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Comment} from '../Models/Comment'


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  addStudent: any;
  /*getComment() {
    throw new Error('Method not implemented.');
  }*/

  constructor(private fs:Firestore) { 

  }

  getComment():Observable<Comment[]>
  {
    console.log(this.fs);
    const myCollection:any=collection(this.fs, 'Comment');
    return collectionData(myCollection);
  }

  addComment(student:Comment){
    const myCollection=collection(this.fs, 'Comment');
    addDoc(myCollection, Comment);
  }

}
