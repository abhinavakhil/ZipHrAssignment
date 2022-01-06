import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {
  @Input() userId:any;

  userAlbums:Array<any> = [];
  subscription: Subscription = new Subscription();

  constructor(private commonService:CommonService,
    private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.userId);
    this.getAlbums();
  }

  getAlbums(){
    this.subscription.add(this.commonService.albums().subscribe((response:any) => {
      const albums = [...response];
      this.userAlbums = albums.filter((album) => album.userId == this.userId);
      console.log(this.userAlbums);
      this.cd.markForCheck();
    }));
  }


}
