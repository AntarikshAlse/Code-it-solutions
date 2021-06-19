import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
courseObj:any;
id:number=1;
  constructor(private _actRoute :ActivatedRoute,private _router:Router,private globalServices:GlobalServiceService) { }

  ngOnInit(): void {

    this._actRoute.paramMap.subscribe((params:any)=>{
      this.id = Number(params.get('id'));
      console.log(this.id);
    })

    this.globalServices.getSingleId("courses",this.id).subscribe((res: any) => {   
      this.courseObj = {...res }
      console.log(this.courseObj);
    })
  }
  editData(val:any){
    const courseobj={
      id:this.id,
      coursename:val.coursename,
      courseFees:val.courseFees,

    }
    this.globalServices.updateData("courses",courseobj,this.id)
    .subscribe(()=>{
      alert(`data of id :${this.id} updated successfully `);
      this._router.navigate(['courses']);
    })
  }
  
  cancel(){
    this._router.navigate(['courses']); 
  }

}
