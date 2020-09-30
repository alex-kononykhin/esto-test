import { Injectable } from '@angular/core';
import { random } from 'faker';
import { BehaviorSubject, timer } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Photo } from '../models/photo';
import { retreiveFavorites, persistFavorites } from '../util/persist';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  isLoading = new BehaviorSubject<boolean>(false);
  photos = new BehaviorSubject<Photo[]>([]);

  favorites = new BehaviorSubject<Photo[]>(retreiveFavorites());

  constructor() {
    this.getNewImages(12);
    this.favorites.pipe(skip(1)).subscribe(persistFavorites);
  }

  getNewImages(count: number = 6) {
    const newBatch: Photo[] = [];
    for (let i = 0; i < count; i++) {
      newBatch.push({
        id: random.uuid(),
        url: random.image(),
      });
    }
    this.isLoading.next(true);
    timer(200 + Math.random() * 100).subscribe(() => {
      this.isLoading.next(false);
      this.photos.next(this.photos.value.concat(newBatch));
    });
  }

  addToFavorites(photo: Photo) {
    if (this.favorites.value.find(({ id }) => id === photo.id)) {
      return;
    }
    this.favorites.next([...this.favorites.value, photo]);
  }

  removeFromFavorites(photo: Photo) {
    this.favorites.next(this.favorites.value.filter((p) => p.id !== photo.id));
  }
}
