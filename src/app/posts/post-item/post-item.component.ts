import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit, OnDestroy {
  postId: number = 0;
  post: any;
  subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.postId = +params.id;
      this.getCurrentPost(this.postId);
    });
  }

  /**
   * get current post
   * @param id based upon id
   */
  getCurrentPost(id: number) {
    this.subscription.add(
      this.commonService.postsById(id).subscribe((response) => {
        this.post = { ...response };
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
