import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss'],
})
export class LatestPostComponent implements OnInit, OnDestroy {
  latestPosts: Array<any> = [];
  subscription = new Subscription();

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  /**
   * get posts
   */
  getPosts() {
    this.subscription.add(
      this.commonService.posts().subscribe((response) => {
        this.latestPosts = [...response.slice(0, 10)];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
