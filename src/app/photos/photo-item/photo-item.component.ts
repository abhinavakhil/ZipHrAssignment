import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {
  photoId:number = 0;
  photo:any;

  constructor(private activatedRoute: ActivatedRoute,private commonService:CommonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.photoId = +params.id;
      this.getCurrentPhoto(this.photoId);
    });
  }

  getCurrentPhoto(id:number){
    this.commonService.photoById(id).subscribe((response) =>{
      this.photo = {...response};
    })
  }
}
