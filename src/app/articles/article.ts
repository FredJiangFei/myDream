export class Article {
    id: number;
    title: string;
    link: string;
    vote: number;

    constructor(id: number, title: string, link: string, vote?: number) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.vote = vote || 0;
    }

    voteUp() {
        this.vote += 1;
    }

    voteDown() {
        this.vote -= 1;
    }
}