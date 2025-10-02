import { router } from "./core/router";
import {homeView, aboutView, buildViewBase, renderView, logArticleView, contactView} from "./views";
import {buildNavigation} from "./components/navigation";
import {changeLogoOnScroll} from "./components/navigation/logo";
import { buildFooter } from "./components/footer";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
    { path: '/about', handler: () => renderView(aboutView()) },
    { path: '/logs', handler: () => renderView(logArticleView()) },
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

    // Handle initial route
    router.handleRoute(window.location.pathname);
    
    // Setup navigation handling
    setupNavigationHandling();
}

function setupNavigationHandling() {
    // Intercept all link clicks on the page
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        
        if (link && link.getAttribute('href')?.startsWith('/')) {
            e.preventDefault(); // Stop the browser from navigating
            const path = link.getAttribute('href')!;
            
            // Update the URL without refreshing the page
            window.history.pushState({}, '', path);
            
            // Handle the route with your router
            router.handleRoute(path);
        }
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        router.handleRoute(window.location.pathname);
    });
}

init();


