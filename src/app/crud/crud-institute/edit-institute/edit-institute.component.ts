import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css']
})
export class EditInstituteComponent implements OnInit {
  instituteObj: any;
  id:number=1;
  constructor(private _actRoute :ActivatedRoute,private _router:Router,private globalServices:GlobalServiceService) { }

  ngOnInit(): void {

    this._actRoute.paramMap.subscribe((params:any)=>{
      this.id = Number(params.get('id'));
      console.log(this.id);
    })

    this.globalServices.getSingleId("institute",this.id).subscribe((res: any) => {   
      this.instituteObj = {...res }
      console.log("getsingle id response",this.instituteObj);
    })
  }
   editData(val:any){
     const Iobj={
       id:this.id,
       institutename:val.institutename
     }
     this.globalServices.updateData("Institute",Iobj,this.id)
     .subscribe(()=>{
       alert(`data of id :${this.id} updated successfully `);
       this._router.navigate(['institute']);
     })
   }
  cancel(){
    this._router.navigate(['institute']); 
  }

}

