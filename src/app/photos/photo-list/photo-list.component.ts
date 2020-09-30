import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo, PhotoWithFavorite } from 'src/app/models/photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  get isLoading() {
    return this.photoService.isLoading;
  }

  // this will be really slow as photos number grow
  get photos(): Observable<PhotoWithFavorite[]> {
    return combineLatest([
      this.photoService.photos,
      this.photoService.favorites,
    ]).pipe(
      map(([photos, favorites]) =>
        photos.map((photo) => ({
          ...photo,
          favorite: !!favorites.find((fav) => fav.id === photo.id),
        }))
      )
    );
  }

  ngOnInit(): void {}

  loadMorePhotos() {
    this.photoService.getNewImages();
  }

  trackByItems(index: number, item: Photo) {
    return item.id;
  }

  addToFavorites({ id, url }: Photo) {
    console.log('add');
    this.photoService.addToFavorites({ id, url });
  }
}
