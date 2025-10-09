import { LogArticleContentStructure } from '../../views/logs';
import { LogArticleMetadata } from './';

const articleModules = import.meta.glob('./articles/*/index.ts', { eager: true });

const logArticlesRegistry: LogArticleContentStructure[] = Object.values(articleModules)
    .map((module: any) => {
        // Look for any exported content that matches our structure
        // This handles various export names like 'logContent', 'firstLogContent', etc.
        const articleContent = Object.values(module).find(
            (exported: any) => 
                exported && 
                typeof exported === 'object' && 
                exported.metadata && 
                exported.header && 
                exported.articleBlocks
        ) as LogArticleContentStructure;
        
        return articleContent;
    })
    .filter(Boolean) // Remove any undefined entries
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()); // Sort by date, newest first

export { logArticlesRegistry };

// Helper functions for accessing articles
export function getAllLogArticles(): LogArticleContentStructure[] {
    return logArticlesRegistry.filter(article => article.metadata.published);
}

export function getLogArticleById(id: string): LogArticleContentStructure | undefined {
    return logArticlesRegistry.find(article => article.metadata.id === id && article.metadata.published);
}

export function getLatestLogArticles(count: number = 5): LogArticleContentStructure[] {
    return getAllLogArticles()
        .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
        .slice(0, count);
}

export function getLogArticlesByTag(tag: string): LogArticleContentStructure[] {
    return getAllLogArticles().filter(article => 
        article.metadata.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
    );
}

// Export metadata only for listing views
export function getAllLogMetadata(): LogArticleMetadata[] {
    return getAllLogArticles().map(article => article.metadata);
}