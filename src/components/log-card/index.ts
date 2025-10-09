export * from './builder.ts';

export type logCardContent = {
  title: string;
  date: string;
  picture: string;
  excerpt?: string;
  readTime?: string;
  id?: string;
};


// ------------------------------------------------------------------------

export function logCard(content: logCardContent) {
    const card = document.createElement("div");
    card.className = "log-card";
    
    if (content.id) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            import('../../core').then(({ EVENT_BUS }) => {
                EVENT_BUS.dispatch('page_navigation', { pageReference: `/logs/${content.id}` });
            });
        });
    }
    
    const picture = document.createElement("img");
    picture.src = content.picture;
    picture.alt = content.title;
    picture.className = "log-card-image";
    
    const contentContainer = document.createElement("div");
    contentContainer.className = "log-card-content";
    
    const title = document.createElement("h3");
    title.textContent = content.title;
    title.className = "log-card-title";
    
    const date = document.createElement("p");
    date.textContent = content.date;
    date.className = "log-card-date";
    
    contentContainer.appendChild(title);
    contentContainer.appendChild(date);
    card.appendChild(picture);
    card.appendChild(contentContainer);

    return card;
}

export function emptyLogCard() {
    const card = document.createElement("div");
    card.className = "log-card log-card--empty";

    return card;
}

export function createEmptyCardsToFill(currentCount: number, minCount: number = 6): HTMLElement[] {
    const emptyCards: HTMLElement[] = [];
    
    if (currentCount < minCount) {
        const emptyCardsNeeded = minCount - currentCount;
        
        for (let i = 0; i < emptyCardsNeeded; i++) {
            emptyCards.push(emptyLogCard());
        }
    }
    
    return emptyCards;
}