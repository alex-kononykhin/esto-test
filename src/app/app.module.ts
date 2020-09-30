import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { FavoritesComponent } from './photos/favorites/favorites.component';
import { PhotoViewComponent } from './photos/photo-view/photo-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoItemComponent } from './photos/photo-item/photo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    FavoritesComponent,
    PhotoViewComponent,
    PhotoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
