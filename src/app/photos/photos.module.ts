import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { RouterModule, Routes } from '@angular/router';
import { PhotoItemComponent } from './photo-item/photo-item.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
];

@NgModule({
  declarations: [
    PhotosComponent,
    PhotoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    JwPaginationModule,
    RouterModule.forChild(routes),
  ],
  exports:[PhotosComponent]
})
export class PhotosModule { }
