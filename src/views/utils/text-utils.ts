/*
 TEXT-UTILITIES
 Are functions used to create text elements like paragraphs and headlines.
 They guarantee the same text styles across all existing views.
 */

export function writeTitle(importance: string,text: string) {
    const title = document.createElement(importance);
    title.innerHTML = text;

    return title;
}

export function writeParagraph(text: string) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    return paragraph;
}

export function writeLink(text: string, href: string) {
    const link = document.createElement('a');
    link.className = "link";
    link.href = href;
    link.innerHTML = text;
    link.target = "_blank";

    return link;
}