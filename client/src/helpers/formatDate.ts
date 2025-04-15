import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatPostDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays < 7) {
    return formatDistance(date, now, {
      addSuffix: true,
      locale: ru,
    });
  }

  return date.toLocaleDateString('ru-RU');
};