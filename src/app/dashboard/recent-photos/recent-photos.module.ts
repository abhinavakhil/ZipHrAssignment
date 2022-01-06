import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPhotosComponent } from './recent-photos.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecentPhotosComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [RecentPhotosComponent],
})
export class RecentPhotosModule {}
