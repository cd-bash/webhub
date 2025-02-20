import { EVENT_BUS } from "./";

type RouteHandler = (params?: Record<string, string>) => void;

class Router {
    private routes: Map<string, RouteHandler> = new Map();

    constructor() {
        window.addEventListener('popstate', () => this.handleRoute(window.location.pathname));
        EVENT_BUS.subscribe('page_navigation', (data: { pageReference: string }) => this.navigate(data.pageReference));
    }

    public registerRoute(path: string, handler: RouteHandler) {
        this.routes.set(path, handler);
    }

    public navigate(path: string) {
        window.history.pushState({}, '', path);
        this.handleRoute(path);
    }

    public handleRoute(path: string) {
        for (const [route, handler] of this.routes.entries()) {
            const match = this.matchRoute(route, path);
            if (match) {
                handler(match.params);
                return;
            }
        }
        console.error(`No handler found for path: ${path}`);
    }

    private matchRoute(route: string, path: string) {
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