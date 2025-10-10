import { EVENT_BUS } from "./";
import { buildErrorPage } from "../views/error404.ts";
import { seoManager } from "../heads/seo-manager";


export type RouteMeta = any; 
type RouteHandler = (params?: Record<string, string>, meta?: RouteMeta) => void;



class Router {
    private routes: Map<string, { handler: RouteHandler; meta?: RouteMeta }> = new Map();

    constructor() {
        window.addEventListener('popstate', () => this.handleRoute(window.location.pathname));
        EVENT_BUS.subscribe('page_navigation', (data: { pageReference: string }) => this.navigate(data.pageReference));
    }

    public registerRoute(path: string, handler: RouteHandler, meta?: RouteMeta) {
        this.routes.set(path, { handler, meta });
    }

    public navigate(path: string) {
        window.history.pushState({}, '', path);
        this.handleRoute(path);
        
        if (!path.includes('#')) {
            window.scrollTo(0, 0);
        }
    }

    public handleRoute(path: string) {
        const normalizedPath = path === '' || path === '/' ? '' : path;
        for (const [route, { handler, meta }] of this.routes.entries()) {
            const match = this.matchRoute(route, normalizedPath);
            if (match) {
                let metaToApply = meta;

                if (typeof meta === 'function') {
                    metaToApply = meta(match.params);
                }
                if (metaToApply) {
                    seoManager.updatePageMeta(metaToApply);
                }
                handler(match.params, metaToApply);
                return;
            }
        }
        buildErrorPage();
    }

    private matchRoute(route: string, path: string) {
        if (route === '' && (path === '' || path === '/')) {
            return { params: {} };
        }
        
        const routeParts = route.split('/').filter(Boolean);
        const pathParts = path.split('/').filter(Boolean);

        if (routeParts.length !== pathParts.length) {
            return null;
        }

        const params: Record<string, string> = {};
        for (let i = 0; i < routeParts.length; i++) {
            const routePart = routeParts[i];
            const pathPart = pathParts[i];

            if (routePart.startsWith(':')) {
                const paramName = routePart.slice(1);
                params[paramName] = pathPart;
            } else if (routePart !== pathPart) {
                return null;
            }
        }

        return { params };
    }
}

export const router = new Router();