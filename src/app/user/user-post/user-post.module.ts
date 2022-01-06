import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostComponent } from './user-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserPostComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserPostComponent],
})
export class UserPostModule {}
