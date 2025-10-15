import { LogArticleMetadata } from '../../content/logs';
import { logCardContent } from '.';
import { formatDate } from '../../views/utils/date-utils';

// ------------------------------------------------------------------------

export function metadataToLogCard(metadata: LogArticleMetadata): logCardContent {
  return {
    title: metadata.title,
    date: formatDate(metadata.date, ","),
    picture: metadata.heroVisual || '/public/img/common/cd_icon_green.png',
    id: metadata.id
  };
}