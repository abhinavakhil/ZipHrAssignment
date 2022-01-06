import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number = 0;
  user: any;
  subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = +params.userId;
      this.getCurrentUser(this.userId);
    });
  }

  /**
   * get current user based upon current userId
   * @param id userid
   */
  getCurrentUser(id: number) {
    this.subscription.add(
      this.commonService.userById(id).subscribe((response) => {
        this.user = { ...response };
        this.cd.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
