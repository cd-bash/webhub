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
        
        if (link) {
            const href = link.getAttribute('href');
            
            // Handle anchor links (same page)
            if (href?.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                return;
            }
            
            // Handle page navigation
            if (href?.startsWith('/')) {
                e.preventDefault(); // Stop the browser from navigating
                const path = href;
                
                // Update the URL without refreshing the page
                window.history.pushState({}, '', path);
                
                // Handle the route with your router
                router.handleRoute(path);
                
                // Scroll to top unless it's an anchor link
                if (!path.includes('#')) {
                    window.scrollTo(0, 0);
                }
            }
        }
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const path = window.location.pathname;
        router.handleRoute(path);
        
        // Scroll to top on back/forward navigation (unless anchor)
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    });
}

init();


