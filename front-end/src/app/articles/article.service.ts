import { query } from '@angular/core/src/animation/dsl';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ArticleService {
  articles: Article[];

  constructor() { //private analytics: ArticleAnalytics
    this.articles = [
      new Article(1, 'Angular 2', 'https://angular.io'),
      new Article(2, '.Net core', 'https://dotnet.github.io/')
    ];
  }


  getAll(): Article[] {
    return this.articles;
  }

  search(query: string): Article[] {
    return this.articles.filter(x => x.title.indexOf(query) > -1);
  }

  getById(id: number): Article {
    return this.articles.find(x => x.id == id);
  }

  recordEvent(article: Article): void {
    console.log(article);
    // this.analytics.recordEvent(article);
  }
}
