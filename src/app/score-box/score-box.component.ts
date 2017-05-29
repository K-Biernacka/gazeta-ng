import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-box',
  templateUrl: './score-box.component.html',
  styleUrls: ['score-box.component.scss']
})
export class ScoreBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rate = (action) => {
    console.log(action);
}


}
