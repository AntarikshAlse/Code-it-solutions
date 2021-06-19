import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentComponent } from './crud/components/enrollment/enrollment.component';
import { DashboardComponent } from './crud/components/dashboard/dashboard.component';
import { CoursesComponent } from './crud/components/courses/courses.component';
import { InstitutesComponent } from './crud/components/institutes/institutes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditComponent } from './crud/components/edit/edit.component';
import { EditCourseComponent } from './crud/crud-courses/edit-course/edit-course.component';
import { AddCourseComponent } from './crud/crud-courses/add-course/add-course.component';
import { EditInstituteComponent } from './crud/crud-institute/edit-institute/edit-institute.component';
import { AddInstituteComponent } from './crud/crud-institute/add-institute/add-institute.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    EnrollmentComponent,
    DashboardComponent,
    CoursesComponent, 
    InstitutesComponent, EnrollmentComponent,
    PageNotFoundComponent,
    EditComponent,
    EditComponent,
    EditCourseComponent,
    AddCourseComponent,
    EditInstituteComponent,
    AddInstituteComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
