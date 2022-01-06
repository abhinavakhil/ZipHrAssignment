import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PostItemComponent } from './post-item/post-item.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    JwPaginationModule,
    RouterModule.forChild(routes),
  ],
  exports:[PostsComponent]
})
export class PostsModule { }
