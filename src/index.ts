
import { homeView, aboutView, contactView, logsView, logArticleView, buildViewBase, renderView } from "./views";
import { buildNavigation } from "./components/navigation";
import { changeLogoOnScroll } from "./components/navigation/logo";
import { buildFooter } from "./components/footer";
import { titleManager } from "./core/title-manager";

const routes = [
    {
        path: '',
        handler: () => {
            titleManager.updateTitle('cd-labs');
            renderView(homeView());
        }
    },
    {
        path: '/about',
        handler: () => {
            titleManager.updateTitle('About | cd-labs');
            renderView(aboutView());
        }
    },
    {
        path: '/logs',
        handler: () => {
            titleManager.updateTitle('Logs | cd-labs');
            renderView(logsView());
        }
    },
    {
        path: '/logs/:id',
        handler: (params?: Record<string, string>) => {
            const articleId = params?.id;
            if (articleId) {
                // Try to get article title for dynamic title
                try {
                    const { getLogArticleById } = require('./content/logs/registry');
                    const article = getLogArticleById(articleId);
                    if (article) {
                        titleManager.updateTitle(`${article.metadata.title} | cd-labs`);
                    } else {
                        titleManager.updateTitle('Article | cd-labs');
                    }
                } catch (e) {
                    titleManager.updateTitle('Article | cd-labs');
                }
                renderView(logArticleView(articleId));
            } else {
                titleManager.updateTitle('Logs | cd-labs');
                renderView(logsView());
            }
        }
    },
    {
        path: '/contact',
        handler: () => {
            titleManager.updateTitle('Contact | cd-labs');
            renderView(contactView());
        }
    }
];

import { router } from "./core/router";
routes.forEach(route => router.registerRoute(route.path, route.handler));

//-----------------------------------------------------------------------

function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const nav = buildNavigation();
    const footer = buildFooter();

    body.appendChild(nav);
    window.addEventListener('scroll', changeLogoOnScroll);

    body.appendChild(contentPage);
    body.appendChild(footer);

    router.handleRoute(window.location.pathname);
    setupNavigationHandling();
}

//-----------------------------------------------------------------------

function setupNavigationHandling() {
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        
        if (link) {
            const href = link.getAttribute('href');
            
            if (href?.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                return;
            }
            
            if (href?.startsWith('/')) {
                e.preventDefault(); 
                const path = href;
                
                window.history.pushState({}, '', path);
                router.handleRoute(path);
                
                if (!path.includes('#')) {
                    window.scrollTo(0, 0);
                }
            }
        }
    });
    
    window.addEventListener('popstate', () => {
        const path = window.location.pathname;
        router.handleRoute(path);
        
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    });
}

init();


