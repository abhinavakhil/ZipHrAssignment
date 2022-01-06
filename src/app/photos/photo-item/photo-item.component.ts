import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit, OnDestroy {
  photoId: number = 0;
  photo: any;
  subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.photoId = +params.id;
      this.getCurrentPhoto(this.photoId);
    });
  }

  /**
   * get current photo based upon Id
   * @param id id
   */
  getCurrentPhoto(id: number) {
    this.subscription.add(
      this.commonService.photoById(id).subscribe((response) => {
        this.photo = { ...response };
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
