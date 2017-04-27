import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PictureNewsComponent } from './picture-news/picture-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { SingleArticleComponent } from './single-article/single-article.component';

const appRoutes: Routes = [
  { path: '', component: PictureNewsComponent },
  { path: 'news', component: SingleArticleComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PictureNewsComponent,
    ListNewsComponent,
    SingleArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
