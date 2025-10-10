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
  const [year, month, day] = dateString.split('-');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${monthNames[Number(month) - 1]} ${Number(day)}, ${year}`;
}