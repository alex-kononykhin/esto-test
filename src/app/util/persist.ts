import { Photo } from '../models/photo';

// local storage is not the best way to persist large data as it's synchronous
export function persistFavorites(favorites: Photo[]) {
  console.log('Saving favorites');
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function retreiveFavorites(): Photo[] {
  const item = localStorage.getItem('favorites');
  if (item) {
    try {
      return JSON.parse(item);
    } catch (e) {
      return [];
    }
  } else {
    return [];
  }
}
