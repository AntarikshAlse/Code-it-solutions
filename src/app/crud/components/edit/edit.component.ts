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
  id:number=1;
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
      this.id = Number(params.get('id'));
      console.log("activated route",this.id);
    })

    this._globalServices.getSingleId("student",this.id).subscribe((res: any) => {   
      this.stdObj = {...res }
      console.log("obj of gbl singeid method",this.stdObj);
    })

    this.instituteData();
    this.courseData();

  }
  /* ****************Sending Data********************* */
    getdata(val:any){
      const newstdObj={
          id:this.id,
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
        this._globalServices.updateData("student",newstdObj,this.id).subscribe(()=>{        //  global service
          alert("Data updated Successfully");
          this._router.navigate(['dashboard']); 
        })
      }

      instituteData()
    {
      this._globalServices.getData('Institute')
      .subscribe((res)=>{this.instituteArray=res; console.log("hi response",res)},
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


