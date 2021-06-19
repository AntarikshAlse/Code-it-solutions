import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {path:'edit-courses/:id',component:EditCourseComponent},
  {path:'add-courses',component:AddCourseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudCoursesRoutingModule { }
