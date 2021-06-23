import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../shared/global-service.service';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {
instituteArray:any;
errorMsg:any;
searchrecord:string="";
p:number=1;
  constructor(private globalServices:GlobalServiceService) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.globalServices.getData('institutes')
    .subscribe((res)=>{this.instituteArray=res; 
      console.log("hi response",res);
    },
    (error)=>{this.errorMsg=error})}
  deleteInstitute(_id:any){
    if(confirm(`Are You sure to delete this record with id: ${_id} `))
    {
      this.globalServices.deleteData("institutes",_id)
      .subscribe(()=>
        {alert(`Record Deleted Successfully with id ${_id}`);
          this.getdata()},(error)=>{this.errorMsg=error})
    }
  }
}


