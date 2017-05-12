import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PictureNewsComponent } from './picture-news/picture-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { ScoreBoxComponent } from './score-box/score-box.component';
import { EnterCommentComponent } from './enter-comment/enter-comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { OneCommentComponent } from './one-comment/one-comment.component';

const appRoutes: Routes = [
  { path: '', component: PictureNewsComponent },
  { path: 'news', component: SingleArticleComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PictureNewsComponent,
    ListNewsComponent,
    SingleArticleComponent,
    CommentBoxComponent,
    ScoreBoxComponent,
    EnterCommentComponent,
    CommentsListComponent,
    OneCommentComponent
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
