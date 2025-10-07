import { router } from "./core/router";
import {homeView, aboutView, buildViewBase, renderView, logsView, logArticleView, contactView} from "./views";
import {buildNavigation} from "./components/navigation";
import {changeLogoOnScroll} from "./components/navigation/logo";
import { buildFooter } from "./components/footer";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
    { path: '/about', handler: () => renderView(aboutView()) },
    { path: '/logs', handler: () => renderView(logsView()) },
    { path: '/logs/:id', handler: (params?: Record<string, string>) => {
        const articleId = params?.id;
        if (articleId) {
            renderView(logArticleView(articleId));
        } else {
            renderView(logsView());
        }
    } },
    { path: '/contact', handler: () => renderView(contactView()) } 
];

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


