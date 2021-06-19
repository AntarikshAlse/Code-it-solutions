import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstituteComponent } from './add-institute/add-institute.component';
import { EditInstituteComponent } from './edit-institute/edit-institute.component';

const routes: Routes = [
  {path:"add-institute",component:AddInstituteComponent},
  {path:"edit-institute/:id",component:EditInstituteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudInstituteRoutingModule { }
  