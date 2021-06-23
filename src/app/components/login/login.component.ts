import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../../crud/shared/global-service.service';
import * as bcrypt from 'bcryptjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*
  togglePassword:any = document.querySelector('#togglePassword');
  passgrab:any = document.querySelector('#password');
*/
  constructor(private _globalSer:GlobalServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  user:string='';
  password:string='';
   userData:any;
  loginUser(){
    this._globalSer.getData('users').subscribe((res)=>{
      this.userData=res;
     const data=this.userData.filter((item:any)=>{ 
      return item.userName==this.user && bcrypt.compareSync (this.password,item.password)   
    })
   
    if(data.length > 0){
       this._globalSer.SignIn(this.user);
       this._router.navigate(['dashboard']);
    }else{
      alert('Invalid credential try again');
      this.user="";
      this.password="";
    }
    
    })
  } 
  //password visibility
  // Toggle(){
  //   console.log(this.passgrab.getAttribute);

  // }

//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     this.classList.toggle('bi-eye');
// });

}
