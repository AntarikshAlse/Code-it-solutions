import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudInstituteRoutingModule } from './crud-institute-routing.module';
import { AddInstituteComponent } from './add-institute/add-institute.component';
import { EditInstituteComponent } from './edit-institute/edit-institute.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AddInstituteComponent, EditInstituteComponent],
  imports: [
    CommonModule,
    CrudInstituteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class CrudInstituteModule { }
