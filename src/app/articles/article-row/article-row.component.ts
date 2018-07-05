import { Article } from './../../models/article';
import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.css']
})
export class ArticleRowComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'item';
  @Input() article: Article;
  @Input() num: Number;
  @Output() public like = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  likeArticle() {
    this.like.emit(this.article.title);
  }
}
