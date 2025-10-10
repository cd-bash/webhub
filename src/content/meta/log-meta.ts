import { LogArticleMetadata } from '../logs';
import { PageMeta } from '../../heads/seo-manager';

export function generateLogArticleMeta(metadata: LogArticleMetadata): PageMeta {
  return {
    title: metadata.title,
    description: metadata.excerpt,
    keywords: metadata.tags || [],
    ogTitle: metadata.title,
    ogDescription: metadata.excerpt,
    ogImage: metadata.ogImage || '/img/common/cd_icon_green.png',
    ogType: 'article',
    canonicalUrl: `https://charlesdoucet.com/logs/${metadata.id}`,
    publishedTime: new Date(metadata.date).toISOString(),
    modifiedTime: new Date(metadata.date).toISOString(),
    author: 'CD'
  };
}