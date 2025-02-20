import { buildProjectPage } from "../content/projects";
import {interactiveView} from "../views/interactive-view";

export const routes: Record<string, (params?: Record<string, string>) => void> = {
    'interactive': () => interactiveView(),
    'interactive/:id': (params) => buildProjectPage(params!.id),
};


export function matchRoute(path: string) {
    for (const route in routes) {
        const routePattern = new RegExp(`^${route.replace(/:\w+/g, '([^/]+)')}$`);
        const match = path.match(routePattern);
        if (match) {
            const paramNames = (route.match(/:\w+/g) || []).map(name => name.substring(1));
            const params = paramNames.reduce((acc, name, index) => {
                acc[name] = match[index + 1];
                return acc;
            }, {} as Record<string, string>);
            return { handler: routes[route], params };
        }
    }
    return null;
}