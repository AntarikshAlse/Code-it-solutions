import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './crud/components/dashboard/dashboard.component';
import { CoursesComponent } from './crud/components/courses/courses.component';
import { InstitutesComponent } from './crud/components/institutes/institutes.component';
import { EnrollmentComponent } from './crud/components/enrollment/enrollment.component';
import { EditComponent } from './crud/components/edit/edit.component';
import { EditCourseComponent } from './crud/crud-courses/edit-course/edit-course.component';
import { AddCourseComponent } from './crud/crud-courses/add-course/add-course.component';
import { AddInstituteComponent } from './crud/crud-institute/add-institute/add-institute.component';
import { EditInstituteComponent } from './crud/crud-institute/edit-institute/edit-institute.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './crud/shared/Auth/authentication.guard'
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [  
{path:"",component:LoginComponent},
{path:"login",component:LoginComponent},
{path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard]},
//{path:"dashboard",component:DashboardComponent},
{path:"courses",component:CoursesComponent,canActivate:[AuthenticationGuard]},
{path:"institute",component:InstitutesComponent,canActivate:[AuthenticationGuard]},
{path:"enrollment",component:EnrollmentComponent,canActivate:[AuthenticationGuard]},
{path:"about",component:AboutComponent,canActivate:[AuthenticationGuard]},
{path:"about",component:AboutComponent,canActivate:[AuthenticationGuard]},
{path:"contact",component:ContactComponent,canActivate:[AuthenticationGuard]},

{path:'edit/:id',component:EditComponent,canActivate:[AuthenticationGuard]},
{path:'edit-courses/:id',component:EditCourseComponent,canActivate:[AuthenticationGuard]},
{path:'add-courses',component:AddCourseComponent,canActivate:[AuthenticationGuard]},
{path:'add-institute',component:AddInstituteComponent,canActivate:[AuthenticationGuard]},
{path:'edit-institute/:id',component:EditInstituteComponent,canActivate:[AuthenticationGuard]},
//{ path: "**", redirectTo:'login',pathMatch:'full'}
];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
