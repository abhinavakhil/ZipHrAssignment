import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId:number = 0;
  user:any;
  constructor(private activatedRoute: ActivatedRoute,private commonService:CommonService,private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = +params.userId;
      this.getCurrentPost(this.userId);
    });

  }

  getCurrentPost(id:number){
    this.commonService.userById(id).subscribe((response) =>{
      this.user = {...response};
      this.cd.markForCheck();
    })
  }

}
