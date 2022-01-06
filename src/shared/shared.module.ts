import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PaginationComponent } from './components/pagination/pagination.component';
import { Pipes } from './pipes';

@NgModule({
  declarations: [PaginationComponent, Pipes],
  imports: [CommonModule, JwPaginationModule],
  exports: [PaginationComponent, Pipes],
})
export class SharedModule {}
