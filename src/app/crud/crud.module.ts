import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { InstitutesComponent } from './components/institutes/institutes.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditComponent } from './components/edit/edit.component';
@NgModule({
  declarations: [DashboardComponent, CoursesComponent, InstitutesComponent, EnrollmentComponent, EditComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule.forRoot()
  ],
})
export class CrudModule { }
