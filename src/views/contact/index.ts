import {writeLink, writeParagraph, writeTitle} from "../utils";

export function contactView() {
    const article = document.createElement('article');
    const pageTitle = writeTitle("h1", "contact");
    const pageSubtitle = writeTitle("h5", "let's connect");

    article.appendChild(pageTitle);
    article.appendChild(pageSubtitle);

    return article;
}