import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss'],
})
export class AlbumItemComponent implements OnInit {
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

  getCurrentAlbum(id: number) {
    this.commonService.albumById(id).subscribe((response) => {
      this.photo = { ...response };
    });
  }

  search(event: any): void {
    const value = (<HTMLInputElement>event.target).value;
    this.filteredList = this.allFilteredList.filter((val) =>
      val.title.toLowerCase().includes(value)
    );
  }

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

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  navigateToUserPage(userId: number) {
    this.router.navigate([`/user/${userId}`]);
  }
}
