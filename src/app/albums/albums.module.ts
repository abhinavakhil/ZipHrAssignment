import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SharedModule } from 'src/shared/shared.module';
import { AlbumItemComponent } from './album-item/album-item.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
];
@NgModule({
  declarations: [AlbumsComponent, AlbumItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    JwPaginationModule,
    RouterModule.forChild(routes),
  ],
  exports:[AlbumsComponent]
})
export class AlbumsModule { }
