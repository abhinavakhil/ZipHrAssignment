import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPostComponent } from './latest-post.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LatestPostComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [LatestPostComponent],
})
export class LatestPostModule {}
