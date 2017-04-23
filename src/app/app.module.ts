import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PictureNewsComponent } from './picture-news/picture-news.component';
import { ListNewsComponent } from './list-news/list-news.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureNewsComponent,
    ListNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
