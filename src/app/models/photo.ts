export interface Photo {
  id: string;
  url: string;
}

export interface PhotoWithFavorite {
  id: string;
  url: string;
  favorite: boolean;
}
