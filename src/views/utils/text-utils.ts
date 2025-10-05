import { parseMarkdown } from "./markdown-parser";

export function writeTitle(importance: string,text: string) {
    const title = document.createElement(importance);
    title.innerHTML = parseMarkdown(text);

    return title;
}

export function writeParagraph(text: string) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = parseMarkdown(text);

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