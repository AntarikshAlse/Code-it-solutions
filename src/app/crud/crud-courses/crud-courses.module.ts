import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudCoursesRoutingModule } from './crud-courses-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [EditCourseComponent, AddCourseComponent],
  imports: [
    CommonModule,
    CrudCoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class CrudCoursesModule { }
