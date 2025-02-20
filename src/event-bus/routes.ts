import { buildProjectPage } from "../content/projects";

export const routes: Record<string, () => void> = {
    'next-ux': () => buildProjectPage('next-ux'),
    'space-compass': () => buildProjectPage('space-compass'),
    // Add more routes here
};