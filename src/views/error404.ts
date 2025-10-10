import {createWrapper, writeParagraph, writeTitle} from "./utils";
import {renderView} from "./index.ts";


function errorView() {
    const page = document.createElement('div');
    page.id = 'error-404-page';

    const wrapper = createWrapper();
    const article = document.createElement('article');
    const whoops = writeTitle("h2", "ERROR **404**");
    const viewTitle = writeTitle("h1", "Welcome to the void.");
    const paragraph = writeParagraph("The page you are looking for does not exist. It might have been moved or deleted.");

    article.appendChild(whoops);
    article.appendChild(viewTitle);
    article.appendChild(paragraph);
    wrapper.appendChild(article);
    page.appendChild(wrapper);

    return page;
}

//-----------------------------------------------------------------------

export function buildErrorPage() {
    renderView(errorView());
}