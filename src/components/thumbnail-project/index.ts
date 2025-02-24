import './styles.css';
import {EVENT_BUS} from "../../core";


export type thumbnailContent = {
    readonly thumbnail: string;
    readonly title: string;
    readonly summary: string;
    readonly tag: string;
    readonly thumbnailColor: string;
    readonly path: string;
}

//-----------------------------------------------------------------------

export function projectThumbnail(content: thumbnailContent, showcase: boolean) {
    const itemBox = document.createElement('li');
    const itemThumbnail = document.createElement('img');
    const itemTitle = document.createElement('h5');
    const itemTag = document.createElement('p');
    const hoverBox = document.createElement('div');
    const projectLink = document.createElement('a');
    const itemSummary = document.createElement('p');
    const clearFix = document.createElement('div');

    itemBox.id = 'item-box';
    itemBox.style.backgroundColor = content.thumbnailColor;
    itemTag.className = 'tag';
    hoverBox.className = 'hover-box';
    clearFix.className = 'clearfix';

    if (showcase) {
        itemBox.className += 'showcase';
    }

    itemThumbnail.src = content.thumbnail;
    itemTitle.textContent = content.title;
    itemTag.textContent = content.tag;
    itemSummary.textContent = content.summary;
    projectLink.textContent = "View Project";

    itemBox.appendChild(itemTitle);
    itemBox.appendChild(itemTag);
    hoverBox.appendChild(itemSummary);
    hoverBox.appendChild(projectLink);
    itemBox.appendChild(hoverBox);
    itemBox.appendChild(itemThumbnail);
    itemBox.appendChild(clearFix);

    itemBox.addEventListener('click', () => {
        EVENT_BUS.dispatch('page_navigation', { pageReference: 'interactive/' + content.path });
    });

    return itemBox;
}