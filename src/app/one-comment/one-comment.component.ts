import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['one-comment.component.scss']
})
export class OneCommentComponent implements OnInit {
  @Input()
  display


  constructor() { }

  ngOnInit() {
  }

}
