import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { Pipes } from './pipes';

@NgModule({
  declarations: [PaginationComponent, Pipes],
  imports: [CommonModule, JwPaginationModule],
  exports: [PaginationComponent, Pipes],
})
export class SharedModule {}
