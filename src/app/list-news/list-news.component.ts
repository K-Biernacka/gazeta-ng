import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  list = [
  {
    hour: '18:55',
    text: 'Szykuje się pierwsza polska wojna o L4. Wszysto przez politykę pracodawców'
  },
  {
    hour: '19:03',
    text: 'Nocny pościg z Gniezna do Poznania. Pijany kierowca mercedesa taranował radiowozy'
  },
  {
    hour: '18:25',
    text: 'Griezmann jednak nie w Manchesterze United? A trzeba dać 100 mln. Zwrot akcji'
  },
  {
    hour: '17:59',
    text: 'Łzy, złość i gniew. Żałoba w Sztokholmie. Tłumy ludzi oddają hołd ofiarom terrorystycznego ataku'
  },
  {
    hour: '17:59',
    text: 'Takiej reklamy na koszulkach piłkarskich jeszcze nie było. Sponsor miał fantazję'
  },
  {
    hour: '17:53',
    text: 'Niespodziewanie dobry piłkarz w ekstraklasie. Wygryzł ze składu byłą gwiazdę. Sprzedadzą go za fortunę?'
  },
  {
    hour: '16:57',
    text: 'Wielka awantura o... piersi zawodniczki UFC! Powstało dużo zamieszkania [ZDJĘCIA]'
  },
  {
    hour: '16:55',
    text: 'Polski selekcjoner zwolniony z funkcji trenera'
  },
  {
    hour: '16:47',
    text: 'Godek wraca z projektem Zatrzymaj aborcję. Chce zebrać milion podpisów'
  }
];
  constructor() { }

  ngOnInit() {
  }
}
