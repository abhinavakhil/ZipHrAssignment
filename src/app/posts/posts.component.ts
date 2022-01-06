import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  searchTerm: string = '';

  posts: Array<any> = [];
  allPosts: Array<any> = [];
  users: Array<any> = [];
  subscription = new Subscription();
  pageOfItems: Array<any> = [];

  constructor(
    private commonService: CommonService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  /**
   * get posts
   */
  getPosts() {
    this.subscription.add(
      this.commonService.posts().subscribe((response: any) => {
        this.posts = [...response];
        this.allPosts = [...this.posts];
        this.cd.markForCheck();
      })
    );
  }

  /**
   * get users
   */
  getUsers() {
    this.subscription.add(
      this.commonService.users().subscribe((response: any) => {
        this.users = [...response];
        this.cd.markForCheck();
      })
    );
  }

  /**
   * filter posts based upon title
   * @param event title
   */
  search(event: any): void {
    const value = (<HTMLInputElement>event.target).value;

    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: { searching: value },
    });

    this.posts = this.allPosts.filter((val) =>
      val.title.toLowerCase().includes(value)
    );
  }

  /**
   * when page is changed
   * @param pageOfItems array
   */
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  /**
   * filter posts based upon selected user name
   * @param event name
   */
  selectedUser(event: any) {
    const user = (<HTMLInputElement>event.target).value;

    if (user !== '0') {
      this.pageOfItems = this.posts.filter((item) => item.userId == user);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
