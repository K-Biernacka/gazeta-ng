import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-comment',
  templateUrl: './enter-comment.component.html',
  styleUrls: ['enter-comment.component.scss']
})
export class EnterCommentComponent implements OnInit {


  payload={
    comment: '',
    userName: ''
  };


  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
  let comments: any = localStorage.getItem("comments");

  comments = JSON.parse(comments);
  if (comments == null) {
    comments = []
  }
  comments.unshift(this.payload);
  localStorage.setItem("comments", JSON.stringify(comments));



  }

}
