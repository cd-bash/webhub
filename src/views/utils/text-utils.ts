/*
 TEXT-UTILITIES
 Are functions used to create text elements like paragraphs and headlines.
 They guarantee the same text styles across all existing views.
 */

export function writeTitle(importance: string,text: string) {
    const title = document.createElement(importance);
    title.textContent = text;

    return title;
}

export function writeParagraph(text: string) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}