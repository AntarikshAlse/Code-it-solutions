import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /*
  instituteArray: any;
  courseArray: any;
  instituteInfo:any;
  courseInfo:any;
  */

  constructor(private _globalService:GlobalServiceService,private modalService: BsModalService) { }
  errorMsg:any;
  // id:number=1;
  Obj:any;
  modalRef: any;
  studentList:any;
   p:number=1;
  searchrecord:string="";
  order:string = "";
  reverse:boolean = false;

  ngOnInit(): void {
  this.getdata();
  // Resolve [obj obj]
  /*
  this.instituteData();
  this.courseData();
  */
  }
  
  getdata(){
    this._globalService.getData("student").subscribe((res)=>{this.studentList=res;
    console.log("get response is =>",res)},
    (error)=>{this.errorMsg=error});
  }
  // Resolve [obj obj]
  /*
  instituteData()
    {
      this._globalService.getData('Institute')
      .subscribe((res)=>{this.instituteInfo=res; 
        console.log("institute response",res);

        //Map function => to resolve [object object]
       this.instituteArray = this.instituteInfo.map((val:any)=>{return val.institutename});
        console.log("institute array is =>\n",this.instituteArray);
      
      },
      (error)=>{this.errorMsg=error});
    }

  courseData()
  {
    this._globalService.getData('courses')
    .subscribe((res)=>{this.courseInfo=res; console.log("response course",res);

    //Map function => to resolve [object object]
   this.courseArray = this.courseInfo.map((val:any)=>{return val.coursename});
    console.log("course array is =>\n",this.courseArray);
  
  },
    (error)=>{this.errorMsg=error});
  }  
  */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteStd(id:any){

    if(confirm(`Are You sure to delete this record with id: ${id} `)){
      this._globalService.deleteData("student",id).subscribe(()=>{
        alert(`Record Deleted Successfully with id ${id}`);
        this.getdata();
      })
    }

  } 
  // getData(val:any){
  //   const stdObj={
  //       id:this.id,
  //      stdFullName:val.stdFullName,}

  // this._globalService.editData("student",stdObj).subscribe(()=>{
  //   alert("your data added successfully");
    
  //   })
  // }


  changeOrder()
  { this.reverse = !this.reverse;}

}
