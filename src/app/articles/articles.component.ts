import { TabbedReport } from './../models/tabbedReport';
import { ArticleService } from './../common/services/article.service';
import { Article } from './../models/article';
import { Component, OnInit, Inject } from '@angular/core';
import { Report } from '../models/report';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService, @Inject('API_URL') apiUrl: string) {

  }

  ngOnInit() {
    this.getAllArticles();
    this.runReport();
  }

  getAllArticles() {
    this.articles = this.articleService.getAll();
  }

  runReport() {
    let headers = ['Name'];
    let data = ['Alice', 'Paul'];
    let t = new TabbedReport(headers, data);
    t.run();
  }

  like(article: Article) {
    console.log(`${article.title} liked`);
    this.articleService.recordEvent(article);
  }
}
