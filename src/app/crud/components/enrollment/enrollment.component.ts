import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegName,RegContact,RegEmail,RegPassword,experience,qualification,advert} from "src/app/constants";
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  stdform:any;
  qualification:string[]=qualification;
  specialization:boolean = true ;
 // yearOfPassing:number[]=YOP;
  stdExp:string[]=experience;
  degree:any;
  Institute:any;
  instituteArray:any;
  Courses:any;
  courseArray:any;
  Advert:string[]=advert;
  formControlState:boolean=true;
  instituteState:boolean=false;
  errorMsg: any;
  

  constructor(private _FormBuilder:FormBuilder,private globalSer:GlobalServiceService,private _router:Router) { }

  getData(val:any){
   // console.log(val); 
    const stdObj={
      Advert:val.Advert,
      Batch:val.BatchType,
      Course:val.Course,
      Institute:val.Institute,
      appearing:val.appearing,
      city:val.stdCity,
      college:val.stdCollegeName,
      email:val.stdEmail,
      experience:val.stdExp,
      name:val.stdFullName,
      mobileNo:val.stdMobile,
      yearofPassing:val.stdPassingYear,
      qualification:val.stdQualification,
      specialization:val.stdSpecialization
    }
    this.globalSer.addData("student",stdObj).subscribe(()=>{
      alert(stdObj.yearofPassing);
      alert("Data added successfully");
      this._router.navigate(['dashboard']);
    })
  }



  // institute 
  getInstitute(option:string){
    if(option == "Firstbit")
    {
      this.instituteState = false;
      

      console.log("n",this.instituteState);
    }
    else
    {
      this.instituteState = true;
      console.log("y",this.instituteState);
    }
    
  }
  // specialization
  deg(stdQualification:any){
     console.log("-->",stdQualification);
    switch(stdQualification){
      case 'HSC' :/* group cases*/
      case 'SSC' :    this.specialization=false;
          break;
      default:this.specialization=true;
    }
  }
  // passout year
  getPassingYear(option:string){
    if(option == "option1")
    {
      this.formControlState = true;
      

      console.log("n",this.formControlState);
    }
    else
    {
      this.formControlState = false;
      console.log("y",this.formControlState);
    }
  }

  ngOnInit(): void {
   this.form()
    //to get courses and institute dynamically
    this.instituteData();
    this.courseData();
    /* this.stdform=new FormGroup({
         stdfullName:new FormControl('',[Validators.required,Validators.pattern(RegName)]),
         stdpassword:new FormControl('',[Validators.required,Validators.pattern(RegPassword)]),
         stdEmail:new FormControl('',[Validators.required,Validators.pattern(RegEmail)]),
         stdContact:new FormControl('',[Validators.required,Validators.pattern(RegContact)]),
        stdCourse:new FormControl('',[Validators.required]),
         stdTerm:new FormControl('',[Validators.required])
    })*/
    
  }
   //to get courses and institute dynamically
  instituteData()
    {
      this.globalSer.getData('Institute')
      .subscribe((res)=>{this.instituteArray=res; console.log("hi response",res)},
      (error)=>{this.errorMsg=error});
    }

  courseData()
  {
    this.globalSer.getData('courses')
    .subscribe((res)=>{this.courseArray=res; console.log("hi response course",res)},
    (error)=>{this.errorMsg=error});
  }  

  form(){
  this.stdform = this._FormBuilder.group({
    stdFullName:['',[Validators.required,Validators.pattern(RegName)]],
    stdMobile:['',[Validators.required,Validators.pattern(RegContact)]],
    stdEmail:['',[Validators.required,Validators.pattern(RegEmail)]],
    //name: [{value: '', disabled: this.isDisabled}, Validators.required]

    stdQualification:['',[Validators.required]],
    stdSpecialization:['',[Validators.required]],
     appearing:['',[Validators.required]],
    stdPassingYear:[{value:''},[Validators.required]],
    stdCollegeName:['',[Validators.required]],

    stdCity:['',[Validators.required,Validators.pattern(RegName)]],
    stdExp:['',[Validators.required]],
    Course:['',[Validators.required]],

    Institute:['',[Validators.required]],
    Advert:['',[Validators.required]],
    BatchType:['',[Validators.required]],
    stdTerm:['',[Validators.required]],
  });
}
}
