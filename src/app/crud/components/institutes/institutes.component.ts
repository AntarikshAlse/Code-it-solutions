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
  this.callarray()
  }
  callarray(){
    console.log("heyy",this.instituteArray);
  }

  getdata(){
    this.globalServices.getData('Institute')
    .subscribe((res)=>{this.instituteArray=res; console.log("hi response",res)},
    (error)=>{this.errorMsg=error});
    }
  deleteInstitute(id:any){
    if(confirm(`Are You sure to delete this record with id: ${id} `))
    {
      this.globalServices.deleteData("Institute",id)
      .subscribe(()=>
        {alert(`Record Deleted Successfully with id ${id}`);
          this.getdata();})
    }
  }
}


