import { ArticleService } from './../article.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  constructor(private el: ElementRef,
    private articleService: ArticleService) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .map(q => this.articleService.search(q))
      .subscribe(response => console.log(response));
  }

}
