import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit, OnDestroy {
  @Input() userId: any;

  userPosts: Array<any> = [];
  subscription: Subscription = new Subscription();

  constructor(
    private commonService: CommonService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  /**
   * get posts based upon selected userId
   */
  getPosts() {
    this.subscription.add(
      this.commonService.posts().subscribe((response: any) => {
        const posts = [...response];
        this.userPosts = posts.filter((post) => post.userId == this.userId);
        this.cd.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
