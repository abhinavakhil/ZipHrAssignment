import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  posts: Array<any> = [];
  albums: Array<any> = [];
  photos: Array<any> = [];
  subscription: Subscription = new Subscription();

  constructor(
    private commonService: CommonService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getAlbums();
    this.getPhotos();
  }

  getPosts() {
    this.subscription.add(
      this.commonService.posts().subscribe((response: any) => {
        this.posts = [...response];
      })
    );
  }

  getAlbums() {
    this.subscription.add(
      this.commonService.albums().subscribe((response: any) => {
        this.albums = [...response];
      })
    );
  }

  getPhotos() {
    this.subscription.add(
      this.commonService.photos().subscribe((response: any) => {
        this.photos = [...response];
      })
    );
  }
}
