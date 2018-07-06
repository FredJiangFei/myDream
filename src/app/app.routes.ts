import { AddArticleComponent } from './articles/add-article/add-article.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { MembersComponent } from './members/members.component';
import { AuthGurd } from './common/guards/auth-gurd';
import { PostsComponent } from './posts/posts.component';
import { Component } from '@angular/core';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

export const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    // canActivate: [AuthGurd] 
  },
  {
    path: 'members',
    component: MembersComponent,
    // canActivate: [AuthGurd] 
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'articles/add',
    component: AddArticleComponent
  }
];
