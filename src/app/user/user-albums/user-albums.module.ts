import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAlbumsComponent } from './user-albums.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserAlbumsComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserAlbumsComponent],
})
export class UserAlbumsModule {}
