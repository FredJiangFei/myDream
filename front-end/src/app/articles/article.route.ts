import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponent } from './articles.component';

export const articleRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'add',
    component: AddArticleComponent
  },
  {
    path: ':id',
    component: ArticleComponent
  }
];