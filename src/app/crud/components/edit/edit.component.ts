import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServiceService } from '../../shared/global-service.service';
import {YOP,experience,qualification,advert} from "src/app/constants";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _actRoute :ActivatedRoute,private _globalServices:GlobalServiceService,private _router:Router,fb:FormBuilder) { }
  stdform:any;
  stdObj:any;
  _id:any;
  experience:string[]=experience;
  Advert:string[]=advert;
  ad:any;
  qualification:string[]=qualification;
  degree:any;
  yearofpassing:number[]=YOP;
  instituteArray:any;
  courseArray:any;
  errorMsg:any;

  ngOnInit(): void {
 /* *****************Requesting data******************** */
    //extracting id from url by activated route 
    this._actRoute.paramMap.subscribe((params:any)=>{
      this._id = params.get('id');
      console.log("activated route",this._id);
    })

    this._globalServices.getSingleId("students",this._id).subscribe((res: any) => {   
      this.stdObj = {...res }
      console.log("obj of gbl singeid method",this.stdObj);
    })

    this.instituteData();
    this.courseData();

  }
  /* ****************Sending Data********************* */
    getdata(val:any){
      const newstdObj={
          _id:this._id,
          Advert:val.Advert,
          Batch:val.Batch,
          Course:val.Course,
          Institute:val.Institute,
          appearing:val.appearing,
          city:val.city,
          college:val.college,
          email:val.email,
          experience:val.experience,
          name:val.name, 
          mobile:val.mobileNo,
          yearofPassing:val.yearofPassing,
          qualification:val.qualification,
          specialization:val.specialization
        }
        console.log("hii",newstdObj);
        this._globalServices.updateData("students",newstdObj,this._id).subscribe(()=>{        //  global service
          alert("Data updated Successfully");
          this._router.navigate(['dashboard']); 
        })
      }

      instituteData()
    {
      this._globalServices.getData('institutes')
      .subscribe((res)=>{this.instituteArray=res; console.log("hi response institutes",res)},
      (error)=>{this.errorMsg=error});
    }

      courseData()
  {
    this._globalServices.getData('courses')
    .subscribe((res)=>{this.courseArray=res; console.log("hi response course",res)},
    (error)=>{this.errorMsg=error});
  }  

      cancel(){
        this._router.navigate(['dashboard']); 
      }
      
  }


