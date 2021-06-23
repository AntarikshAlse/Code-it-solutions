import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  errorMsg: any;
  courseArray:any;
  searchrecord:string="";
  p:number=1;

  constructor(private globalServices:GlobalServiceService,private _actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //calling data @ start of page
    this.getdata();

  }

// get method
getdata(){
this.globalServices.getData('courses').subscribe((res)=>{this.courseArray=res},(error)=>{
  this.errorMsg=error});
}

  deleteCourse(_id:any){
    if(confirm(`Are You sure to delete this record with id: ${_id} `))
    {
      this.globalServices.deleteData("courses",_id)
      .subscribe(()=>
        {alert(`Record Deleted Successfully with id ${_id}`);
          this.getdata();})
    }
  }

}