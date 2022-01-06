import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  searchTerm: string = '';

  albums: Array<any> = [];
  allAlbums: Array<any> = [];
  photos: Array<any> = [];
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
  }

  getAlbums() {
    this.subscription.add(
      this.commonService.albums().subscribe((response: any) => {
        console.log(response);
        this.albums = [...response];
        this.allAlbums = [...this.albums];
      })
    );
  }

  getPhotos() {
    this.subscription.add(
      this.commonService.photos().subscribe((response: any) => {
        this.photos = [...response];
        this.cd.markForCheck();
      })
    );
  }

  getfilteredPhotos(userId: number) {
    const filteredList = this.photos.filter((photo) => photo.albumId == userId);
    return filteredList.slice(0, 4);
  }

  search(event: any): void {
    const value = (<HTMLInputElement>event.target).value;
    this.albums = this.allAlbums.filter((val) =>
      val.title.toLowerCase().includes(value)
    );
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  navigateToUserPage(userId: number) {
    this.router.navigate([`/user/${userId}`]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
