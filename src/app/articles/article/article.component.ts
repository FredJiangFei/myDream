import { ArticleService } from './../../common/services/article.service';
import { Article } from './../../models/article';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;
  article: Article;
  constructor(private activiteRoute: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.activiteRoute.params.subscribe(params => this.id = params['id']);
    this.loadActicle();
  }

  loadActicle() {
    this.article = this.articleService.getById(this.id);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
