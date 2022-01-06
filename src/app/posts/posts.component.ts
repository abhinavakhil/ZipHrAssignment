import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/shared/services/common.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  searchTerm: string = '';

  posts:Array<any> = [];
  allPosts: Array<any> = [];
  users:Array<any> = [];
  subscription = new Subscription();
  pageOfItems: Array<any> = [];

  constructor(private commonService:CommonService,
              private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  getPosts(){
    this.subscription.add(this.commonService.posts().subscribe((response:any) => {
      this.posts = [...response];
      this.allPosts = [...this.posts];
      this.cd.markForCheck();
    }));
  }

  getUsers(){
    this.subscription.add(this.commonService.users().subscribe((response:any) => {
      this.users = [...response];
      this.cd.markForCheck();
    }));
  }

  search(event:any): void {
    const value = (<HTMLInputElement>event.target).value;
    this.posts = this.allPosts.filter((val) => val.title.toLowerCase().includes(value));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  selectedUser(event:any){
    const user = (<HTMLInputElement>event.target).value;

    if(user !== '0'){
     this.pageOfItems = this.posts.filter((item) => item.userId == user);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
