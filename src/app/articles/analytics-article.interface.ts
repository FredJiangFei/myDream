import { Article } from './article';

export interface ArticleAnalytics {
    recordEvent(article: Article): void;
}