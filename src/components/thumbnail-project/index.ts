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
    const thumbnailBox = document.createElement('li');
    const itemThumbnail = document.createElement('img');
    const itemTitle = document.createElement('h5');
    const itemTag = document.createElement('p');
    const hoverBox = document.createElement('div');
    const projectLink = document.createElement('a');
    const itemSummary = document.createElement('p');
    const clearFix = document.createElement('div');

    thumbnailBox.id = 'thumbnail-box';
    thumbnailBox.style.backgroundColor = content.thumbnailColor;
    itemTag.className = 'tag';
    hoverBox.className = 'hover-box';
    clearFix.className = 'clearfix';

    if (showcase) {
        thumbnailBox.className += 'showcase';
    }

    itemThumbnail.src = content.thumbnail;
    itemTitle.textContent = content.title;
    itemTag.textContent = content.tag;
    itemSummary.textContent = content.summary;
    projectLink.textContent = "View Project";

    thumbnailBox.appendChild(itemTitle);
    thumbnailBox.appendChild(itemTag);
    hoverBox.appendChild(itemSummary);
    hoverBox.appendChild(projectLink);
    thumbnailBox.appendChild(hoverBox);
    thumbnailBox.appendChild(itemThumbnail);
    thumbnailBox.appendChild(clearFix);

    thumbnailBox.addEventListener('click', () => {
        EVENT_BUS.dispatch('page_navigation', { pageReference: 'projects/' + content.path });
    });

    return thumbnailBox;
}