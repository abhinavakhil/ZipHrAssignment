import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LatestPostModule } from './latest-post/latest-post.module';
import { RecentPhotosModule } from './recent-photos/recent-photos.module';
import { StatisticsModule } from './statistics/statistics.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StatisticsModule,
    RecentPhotosModule,
    LatestPostModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
