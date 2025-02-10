import './styles.css';
import {EventBus} from "../../event-bus";
import {Events} from "../../consts/events";
import {handlers} from "../../consts/handlers";

const EVENT_BUS = new EventBus<Events>();
EVENT_BUS.subscribe('page_navigation', handlers.page_navigation);

export type thumbnailContent = {
    readonly thumbnail: string;
    readonly title: string;
    readonly description: string;
    readonly tags: string[];
    readonly path: string;
}

//-----------------------------------------------------------------------

export function createThumbnailItem(content: thumbnailContent, showcase: boolean) {
    const itemBox = document.createElement('li');
    const itemThumbnail = document.createElement('img');
    const itemTexts = document.createElement('div');
    const itemTitle = document.createElement('h5');
    const itemDescription = document.createElement('p');
    const itemCategory = document.createElement('p');
    const clearFix = document.createElement('div');

    itemBox.className = 'item-box';
    itemTexts.className = 'item-texts';
    itemDescription.className = 'description'
    clearFix.className = 'clearfix';

    if (showcase) {
        itemBox.className += '-showcase';
    }

    itemThumbnail.src = content.thumbnail;
    itemTitle.textContent = content.title;
    itemDescription.textContent = content.description;

    itemBox.appendChild(itemThumbnail);
    itemBox.appendChild(itemTexts);
    itemTexts.appendChild(itemTitle);
    itemTexts.appendChild(itemDescription);
    itemTexts.appendChild(itemCategory);
    itemBox.appendChild(clearFix);

    itemThumbnail.addEventListener('click', () => EVENT_BUS.dispatch('page_navigation', {path: "Button A", pageReference: content.path}));

    return itemBox;
}