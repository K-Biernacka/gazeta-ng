import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-news',
  templateUrl: './picture-news.component.html',
  styleUrls: ['picture-news.component.scss']
})
export class PictureNewsComponent implements OnInit {

  news = [
    {
      picture: 'https://bis.gazeta.pl/im/75/9f/14/z21623669ID.jpg',
      description: 'Czat komisji smoleńskiej. Absurd gonił absurd. "Wybuch był szybszy niż dźwięk"',
      size: 'img-two-thirds'
    },
    {
      picture: 'https://bis.gazeta.pl/im/39/80/14/z21497913IAR.jpg',
      description: 'Ostrzeżenie dla milionów klientów mBanku. Nowa pułapka hakerów',
      size: 'img-one-third'
    },
    {
      picture: 'https://bis.gazeta.pl/im/de/a4/14/z21646814II.jpg',
      description: 'Na Facebooku pokazał, jak zastrzelił człowieka. "Będę zabijał". Trwają poszukiwania',
      size: 'img-one-third smaller'
    },
    {
      picture: 'https://bis.gazeta.pl/im/68/0b/12/z18922600II.jpg',
      description: 'Tesco wycofuje z oferty niebezpieczną zabawkę. Będzie zwracać pieniądze',
      size: 'img-one-third smaller'
    },
    {
      picture: 'https://bis.gazeta.pl/im/64/a0/14/z21629028II.jpg',
      description: 'Dlaczego drzwi pralek są wklęsłe? Postanowiliśmy zapytać eksperta i już wiemy',
      size: 'img-one-third smaller'
    },
    {
      picture: 'https://bis.gazeta.pl/im/d7/a4/14/z21646807II.jpg',
      description: 'Księżna Kate do kościoła ubrała się skromnie, za to na hiszpańskim dworze... Istna rewia mody!',
      size: 'img-one-half'
    },
    {
      picture: 'https://bis.gazeta.pl/im/4e/9d/14/z21618254II.jpg',
      description: 'Czy wychowujesz swoje dziecko na narcyza? Te sygnały powinny cię niepokoić [PYTAMY EKSPERTA]',
      size: 'img-one-half'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
