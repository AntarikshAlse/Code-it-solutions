import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../../shared/global-service.service';
import {RegName,RegContact} from "src/app/constants";
import { Mongoose } from 'mongoose';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  namePattern:string=RegName;
  FeesPattern:string=RegContact;

  constructor(private globalServices:GlobalServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  AddData(val:any){
    const course={
      courseName:val.name,
      courseFees:val.fees
    }
    this.globalServices.addData('courses',course)
    .subscribe(()=>{
      alert("Data added successfully");
      this._router.navigate(['courses']);
    })

  }
  cancel(){
    this._router.navigate(['institute']); 
  }

}
