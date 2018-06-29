import { MembersComponent } from './members/members.component';
import { AuthGurd } from './common/guards/auth-gurd';
import { PostsComponent } from './posts/posts.component';
import { Component } from '@angular/core';
import { LoginComponent} from './user/login/login.component';
import { RegisterComponent} from './user/register/register.component';

export const appRoutes = [
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
  }
];
