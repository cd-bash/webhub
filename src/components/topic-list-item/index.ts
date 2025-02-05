
export type ItemContent = {
    readonly showcase: boolean;
    readonly thumbnail: string;
    readonly title: string;
    readonly description: string;
    readonly category: string;
}

//-----------------------------------------------------------------------

export function createTopicListItem(content: ItemContent) {
    const itemBox = document.createElement('div');
    const itemThumbnail = document.createElement('img');
    const itemTitle = document.createElement('h5');
    const itemDescription = document.createElement('p');
    const itemCategory = document.createElement('p');

    itemBox.className = 'item-box';

    if (content.showcase) {
        itemBox.className += 'item-showcase';
    }
    else {
        itemBox.className += 'item-list';
    }

    itemThumbnail.src = content.thumbnail;
    itemTitle.textContent = content.title;
    itemDescription.textContent = content.description;
    itemCategory.textContent = content.category;

    itemBox.appendChild(itemThumbnail);
    itemBox.appendChild(itemTitle);
    itemBox.appendChild(itemDescription);
    itemBox.appendChild(itemCategory);

    return itemBox;
}