import {writeTitle} from "../utils";
import {ItemContent} from "../../components/topic-list-item";



//-----------------------------------------------------------------------

export function interactiveView() {
    const viewWrapper = document.getElementById('view-wrapper')!;
    const article = document.createElement('article');
    const viewTitle = writeTitle("h1", "interactive");
    const latestProject = document.createElement('div');
    const listProject = document.createElement('div');

    latestProject.className = 'latest-project';
    listProject.className = 'list-project';

    viewWrapper.appendChild(article);
    article.appendChild(viewTitle);
    
    return article;
}

//-----------------------------------------------------------------------

const latestItems: ItemContent[] = [
    {
        showcase: true,
        thumbnail: 'path/to/thumbnail1.jpg',
        title: 'Project 1',
        description: 'Description of Project 1',
        category: 'Category 1'
    },
    {
        showcase: true,
        thumbnail: 'path/to/thumbnail2.jpg',
        title: 'Project 2',
        description: 'Description of Project 2',
        category: 'Category 2'
    },
];

const allItems: ItemContent[] = [
    {
        showcase: true,
        thumbnail: 'path/to/thumbnail1.jpg',
        title: 'Project 1',
        description: 'Description of Project 1',
        category: 'Category 1'
    },
]