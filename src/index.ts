
import { pageMeta } from "./content/meta/page-meta";
import { generateLogArticleMeta } from "./content/meta/log-meta";
import { homeView, aboutView, contactView, logsView, logArticleView, buildViewBase, renderView } from "./views";
import { buildNavigation } from "./components/navigation";
import { changeLogoOnScroll } from "./components/navigation/logo";
import { buildFooter } from "./components/footer";



const routes = [
    {
        path: '',
        handler: () => renderView(homeView()),
        meta: pageMeta.home
    },
    {
        path: '/about',
        handler: () => renderView(aboutView()),
        meta: pageMeta.about
    },
    {
        path: '/logs',
        handler: () => renderView(logsView()),
        meta: pageMeta.logs
    },
    {
        path: '/logs/:id',
        handler: (params?: Record<string, string>) => {
            const articleId = params?.id;
            if (articleId) {
                renderView(logArticleView(articleId));
            } else {
                renderView(logsView());
            }
        },
        // meta is a function that takes params and returns PageMeta
        meta: (params: Record<string, string>) => {
            // We need to get the article metadata by id
            // But we can't import getLogArticleById here without circular deps, so we pass params to the meta function
            // The router will call this with params, and log-article.ts will handle meta update if needed
            // We'll update this if needed after refactor
            try {
                const { getLogArticleById } = require('./content/logs/registry');
                const article = getLogArticleById(params.id);
                if (article) {
                    return generateLogArticleMeta(article.metadata);
                }
            } catch (e) {}
            return null;
        }
    },
    {
        path: '/contact',
        handler: () => renderView(contactView()),
        meta: pageMeta.contact
    }
];

import { router } from "./core/router";
routes.forEach(route => router.registerRoute(route.path, route.handler, route.meta));

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


