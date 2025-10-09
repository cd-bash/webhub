import { LogArticleMetadata } from '../../content/logs';
import { logCardContent } from '.';

// ------------------------------------------------------------------------

export function metadataToLogCard(metadata: LogArticleMetadata): logCardContent {
  return {
    title: metadata.title,
    date: formatDate(metadata.date),
    picture: metadata.heroVisual || '/public/img/common/cd_icon_green.png',
    excerpt: metadata.excerpt,
    readTime: metadata.readTime,
    id: metadata.id
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}