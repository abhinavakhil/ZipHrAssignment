import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  postId:number = 0;
  post:any;
  constructor(private activatedRoute: ActivatedRoute,private commonService:CommonService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.postId = +params.id;

      this.getCurrentPost(this.postId);
    });

  }

  getCurrentPost(id:number){
    this.commonService.postsById(id).subscribe((response) =>{
      this.post = {...response};
    })
  }

}
