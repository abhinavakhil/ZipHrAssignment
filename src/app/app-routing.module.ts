import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumItemComponent } from './albums/album-item/album-item.component';
import { PhotoItemComponent } from './photos/photo-item/photo-item.component';
import { PostItemComponent } from './posts/post-item/post-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
      path: 'posts/:id',
      component: PostItemComponent,
  },
  {
    path: 'user/:userId',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./albums/albums.module').then((m) => m.AlbumsModule),
  },
  {
    path: 'albums/:id',
    component: AlbumItemComponent
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./photos/photos.module').then((m) => m.PhotosModule),
  },
  {
    path: 'photos/:id',
    component: PhotoItemComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
