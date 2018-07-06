import { Article } from './../../models/article';

export interface ArticleAnalytics {
    recordEvent(article: Article): void;
}