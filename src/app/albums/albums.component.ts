import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  searchTerm: string = '';

  albums: Array<any> = [];
  allAlbums: Array<any> = [];
  photos: Array<any> = [];
  users: Array<any> = [];
  subscription = new Subscription();
  pageOfItems: Array<any> = [];

  constructor(
    private commonService: CommonService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAlbums();
    this.getPhotos();
    this.getUsers();
  }

  /**
   * get albums
   */
  getAlbums() {
    this.subscription.add(
      this.commonService.albums().subscribe((response: any) => {
        this.albums = [...response];
        this.allAlbums = [...this.albums];
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
   * get filtered photos
   * @param userId userId
   * @returns return photos array based upon userId
   */
  getfilteredPhotos(userId: number) {
    const filteredList = this.photos.filter((photo) => photo.albumId == userId);
    return filteredList.slice(0, 4);
  }

  /**
   * filter album by title
   * @param event
   */
  search(event: any): void {
    const value = (<HTMLInputElement>event.target).value;
    this.albums = this.allAlbums.filter((val) =>
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
   * navigate to user page
   * @param userId
   */
  navigateToUserPage(userId: number) {
    this.router.navigate([`/user/${userId}`]);
  }

  /**
   * filter albums based upon currently selected userId
   * @param event
   */
  selectedUser(event: any) {
    const user = (<HTMLInputElement>event.target).value;

    if (user !== '0') {
      this.pageOfItems = this.allAlbums.filter((item) => item.userId == user);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
