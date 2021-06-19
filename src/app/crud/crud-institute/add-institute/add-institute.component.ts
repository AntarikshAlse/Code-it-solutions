import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegName,RegContact} from "src/app/constants";
import { GlobalServiceService } from '../../shared/global-service.service';



@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {
  namePattern:string=RegName;
  FeesPattern:string=RegContact;
  constructor(private globalServices:GlobalServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  Data(val:any){
    console.log("yeh",val);
    const instituteObj={
      institutename:val.fname,
    }
    console.log("info dena",instituteObj)
    this.globalServices.addData('Institute',instituteObj).subscribe(()=>{
      alert("Data added successfully");
       this._router.navigate(['institute']);
    })}


}
