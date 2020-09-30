import { Component, Input, OnInit } from '@angular/core';

import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {
  @Input() photo: Photo | undefined;
  @Input() isFavorite: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
