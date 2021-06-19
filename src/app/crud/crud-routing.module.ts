import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { AddCourseComponent } from './crud-courses/add-course/add-course.component';
import { EditCourseComponent } from './crud-courses/edit-course/edit-course.component';
import { AddInstituteComponent } from './crud-institute/add-institute/add-institute.component';
import { EditInstituteComponent } from './crud-institute/edit-institute/edit-institute.component';

const routes: Routes = [
  {path:"edit/:id",component:EditComponent},
  {path:'add-institute',component:AddInstituteComponent},
  {path:'edit-institute/:id',component:EditInstituteComponent},
  {path:'add-course',component:AddCourseComponent},
  {path:'edit-course/:id',component:EditCourseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
