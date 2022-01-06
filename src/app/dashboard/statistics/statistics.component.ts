import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  posts: Array<any> = [];
  albums: Array<any> = [];
  photos: Array<any> = [];
  subscription: Subscription = new Subscription();

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getPosts();
    this.getAlbums();
    this.getPhotos();
  }

  /**
   * get posts
   */
  getPosts() {
    this.subscription.add(
      this.commonService.posts().subscribe((response: any) => {
        this.posts = [...response];
      })
    );
  }

  /**
   * get albums
   */
  getAlbums() {
    this.subscription.add(
      this.commonService.albums().subscribe((response: any) => {
        this.albums = [...response];
      })
    );
  }

  /**
   * get photos
   */
  getPhotos() {
    this.subscription.add(
      this.commonService.photos().subscribe((response: any) => {
        this.photos = [...response];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
