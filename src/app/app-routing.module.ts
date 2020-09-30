import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './photos/favorites/favorites.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoViewComponent } from './photos/photo-view/photo-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PhotoListComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'photos/:id',
    component: PhotoViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
