import {writeTitle} from "../utils";


export function interactiveView() {
    const viewWrapper = document.getElementById('view-wrapper')!;
    const article = document.createElement('article');

    const viewTitle = writeTitle("h1", "interactive");

    viewWrapper.appendChild(article);
    article.appendChild(viewTitle);
    
    return article;
}