import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPostModule } from './user-post/user-post.module';
import { UserAlbumsModule } from './user-albums/user-albums.module';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserPostModule,
    UserAlbumsModule,
    RouterModule.forChild(routes),
  ],
  exports:[UserComponent]
})
export class UserModule { }
