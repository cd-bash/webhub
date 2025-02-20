import {writeTitle} from "./utils";
import {renderView} from "./index.ts";


function errorView() {
    const article = document.createElement('article');
    const viewTitle = writeTitle("h1", "Page not found 404");

    article.appendChild(viewTitle);
    return article;
}

//-----------------------------------------------------------------------

export function buildErrorPage() {
    renderView(errorView());
}