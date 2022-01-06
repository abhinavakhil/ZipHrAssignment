import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-recent-photos',
  templateUrl: './recent-photos.component.html',
  styleUrls: ['./recent-photos.component.scss'],
})
export class RecentPhotosComponent implements OnInit, OnDestroy {
  latestPhotos: Array<any> = [];
  subscription = new Subscription();

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  /**
   * get photos
   */
  getPhotos() {
    this.subscription.add(
      this.commonService.photos().subscribe((response) => {
        this.latestPhotos = [...response.slice(0, 10)];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
