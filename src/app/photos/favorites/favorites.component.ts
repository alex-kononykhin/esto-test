import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private photoService: PhotoService, private router: Router) {}

  get favorites() {
    return this.photoService.favorites;
  }

  ngOnInit(): void {}

  trackByItems(index: number, item: Photo) {
    return item.id;
  }

  goToPhoto(photo: Photo) {
    this.router.navigate(['photos', photo.id]);
  }
}
