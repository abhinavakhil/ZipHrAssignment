import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss'],
})
export class AlbumItemComponent implements OnInit, OnDestroy {
  id: number = 0;
  searchTerm: string = '';
  photo: any;
  photos: Array<any> = [];
  filteredList: Array<any> = [];
  allFilteredList: Array<any> = [];
  pageOfItems: Array<any> = [];
  subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params.id;
      this.getCurrentAlbum(this.id);
      this.getfilteredPhotos(this.id);
    });
  }

  /**
   * get currently active album
   * @param id album id
   */
  getCurrentAlbum(id: number) {
    this.subscription.add(
      this.commonService.albumById(id).subscribe((response) => {
        this.photo = { ...response };
      })
    );
  }

  /**
   * filter album by title
   * @param event
   */
  search(event: any): void {
    const value = (<HTMLInputElement>event.target).value;
    this.filteredList = this.allFilteredList.filter((val) =>
      val.title.toLowerCase().includes(value)
    );
  }

  /**
   * get filtered photos list
   * @param id album id
   */
  getfilteredPhotos(id: number) {
    this.subscription.add(
      this.commonService.photos().subscribe((response: any) => {
        this.photos = [...response];

        this.filteredList = this.photos.filter((photo) => photo.albumId == id);
        this.allFilteredList = [...this.filteredList];
        this.cd.markForCheck();
        console.log(this.filteredList);
      })
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
   * navigate to user page
   * @param userId
   */
  navigateToUserPage(userId: number) {
    this.router.navigate([`/user/${userId}`]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
