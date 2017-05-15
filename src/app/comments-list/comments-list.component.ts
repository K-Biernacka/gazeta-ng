import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {



  get comments(): any {
    return JSON.parse(localStorage.getItem("comments")) ;

  }




  constructor() { }

  ngOnInit() {
  }

}
