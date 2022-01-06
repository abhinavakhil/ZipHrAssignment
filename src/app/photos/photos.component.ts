import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  searchTerm: string = '';
  photos:Array<any> = [];
  allPhotos: Array<any> = [];
  albums:Array<any> = [];
  subscription = new Subscription();
  pageOfItems: Array<any> = [];

  constructor(private commonService:CommonService,
              private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPhotos();
    this.getAlbums();
  }

  getPhotos(){
    this.subscription.add(this.commonService.photos().subscribe((response:any) => {
      this.photos = [...response];
      this.allPhotos = [...this.photos];
      this.cd.markForCheck();
    }));
  }

  getAlbums(){
    this.subscription.add(this.commonService.albums().subscribe((response:any) => {
      const list = [...response];
      const uniqueList = Array.from(new Set(list.map(i => i.userId)))
      .map(userId => {return list.find(a => a.userId === userId) })

      this.albums = [...uniqueList];
      this.cd.markForCheck();
    }));
  }

  search(event:any): void {
    const value = (<HTMLInputElement>event.target).value;
    this.photos = this.allPhotos.filter((val) => val.title.toLowerCase().includes(value));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  selectedAlbum(event:any){
    const album = (<HTMLInputElement>event.target).value;
    console.log(album)

    if(album !== '0'){
     this.pageOfItems = this.photos.filter((item) => item.albumId == album).slice(0,10);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
