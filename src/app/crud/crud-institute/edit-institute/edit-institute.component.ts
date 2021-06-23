import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css']
})
export class EditInstituteComponent implements OnInit {
  instituteObj:any;
  //id:number=1; // for json
  _id:any = undefined;
  constructor(private _actRoute :ActivatedRoute,private _router:Router,private globalServices:GlobalServiceService) { }

  ngOnInit(): void {

    this._actRoute.paramMap.subscribe((params:any)=>{
       this._id = params.get('id'); 
       console.log('id is',this._id)
    })

    this.globalServices.getSingleId("institutes",this._id).subscribe((res: any) => {   
      console.log("get single id response",res);
      this.instituteObj = {...res }
      console.log('institute Obj is ',this.instituteObj)
    })
  }
   editData(val:any){
     const Iobj={
       _id:this._id,
       instituteName:val.instituteName
     }
     console.log('Iobj is',Iobj,'with id',this._id)
     this.globalServices.updateData("institutes",Iobj,this._id)
     .subscribe(()=>{
       alert(`data of id :${this._id} updated successfully `);
       this._router.navigate(['institute']);
     })
   }
  cancel(){
    this._router.navigate(['institute']); 
  }

}

