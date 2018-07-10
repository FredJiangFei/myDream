import { articleRoutes } from './article.route';
import { SharedModule } from './../common/shared.module';
import { CommonModule } from '@angular/common';
import { ArticleRowComponent } from './article-row/article-row.component';
import { NgModule } from '@angular/core';
import { ArticleService } from './article.service';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles.component';
import { Router, Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    AddArticleComponent,
    ArticleRowComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule {
}

