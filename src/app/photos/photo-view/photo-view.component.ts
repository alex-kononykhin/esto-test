import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss'],
})
export class PhotoViewComponent implements OnInit, OnDestroy {
  photo: Photo | undefined;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      combineLatest([this.photoService.favorites, this.route.params])
        .pipe(
          map(([favorites, params]) =>
            favorites.find((fav) => fav.id === params['id'])
          )
        )
        .subscribe((photo) => (this.photo = photo))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  removeFromFavorites() {
    if (this.photo) {
      this.photoService.removeFromFavorites(this.photo);
      this.router.navigate(['favorites']);
    }
  }
}
