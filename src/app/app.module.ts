import { ArticleRowComponent } from './articles/article-row/article-row.component';
import { ArticleService } from './common/services/article.service';
import { ArticleComponent } from './articles/article/article.component';
import { MemberService } from './common/services/member.service';
import { AuthGurd } from './common/guards/auth-gurd';
import { AuthService } from './common/services/auth.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { PostService } from './common/services/post.service';
///<reference path="shared/shared.module.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { MembersComponent } from './members/members.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PostsComponent,
    MembersComponent,
    ArticlesComponent,
    ArticleComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    ArticleRowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    SharedModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  providers: [
    PostService,
    MemberService,
    AuthService,
    ArticleService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AuthGurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
