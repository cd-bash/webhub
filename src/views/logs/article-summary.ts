import { writeTitle } from "../utils";

// ------------------------------------------------------------------------

export function articleSummary() {
    const container = document.createElement('div');
    container.id = 'article-summary';

    const title = writeTitle('h6', "Log's Content");
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    container.appendChild(title);
    container.appendChild(tocList);

    // Short timeout to let the article render first
    setTimeout(() => populateTableOfContents(tocList), 100);

    return container;
}

// ------------------------------------------------------------------------

function populateTableOfContents(tocList: HTMLElement) {
    const articleWrapper = document.querySelector('article.log #wrapper');
    if (!articleWrapper) return;

    const headers = articleWrapper.querySelectorAll('h3');
    
    headers.forEach((header, index) => {
        const headerElement = header as HTMLElement;
        
        if (!headerElement.id) {
            headerElement.id = `header-${index}`;
        }

        const listItem = document.createElement('li');
        listItem.className = 'toc-item';
        
        const link = document.createElement('a');
        link.setAttribute('data-header-id', headerElement.id);
        link.textContent = headerElement.textContent || '';
        link.className = 'toc-link';

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const headerId = link.getAttribute('data-header-id');
            const targetHeader = headerId ? document.getElementById(headerId) : null;
            if (targetHeader) {
                const yOffset = 150;
                const rect = targetHeader.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const top = rect.top + scrollTop - yOffset;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
                updateActiveTocItem(link);
            }
        });

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    setupScrollSpy(tocList);
}


function updateActiveTocItem(activeLink: HTMLElement) {
    const allTocLinks = document.querySelectorAll('.toc-link');
    allTocLinks.forEach(link => link.classList.remove('active'));
    
    activeLink.classList.add('active');
}


function setupScrollSpy(tocList: HTMLElement) {
    const tocLinks = tocList.querySelectorAll('.toc-link') as NodeListOf<HTMLAnchorElement>;
    const headers = Array.from(tocLinks).map(link => {
        const targetId = link.getAttribute('data-header-id');
        return targetId ? document.getElementById(targetId) : null;
    }).filter(Boolean) as HTMLElement[];

    if (headers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                const correspondingLink = tocList.querySelector(`a[data-header-id="${targetId}"]`);
                if (correspondingLink) {
                    updateActiveTocItem(correspondingLink as HTMLElement);
                }
            }
        });
    }, {
        rootMargin: '-20% 0px -80% 0px', 
        threshold: 0
    });

    headers.forEach(header => observer.observe(header));
}