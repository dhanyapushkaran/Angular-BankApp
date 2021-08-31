import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome to Net Banking"
  acno = "Account no please"
  pswd = ""

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  authentication() {
    if (this.loginForm.valid) {
      var acno = this.loginForm.value.acno
      var pswd = this.loginForm.value.pswd
     this.ds.authentication(acno, pswd)
     .subscribe((result:any)=>{
      if (result) {
        console.log(result.message);
        alert(result.message)
        localStorage.setItem("userName", result.userName)
        localStorage.setItem("currentAcc", result.currentAcc)
        this.router.navigateByUrl("dashboard")
      }
     }, result=>{
       console.log(result.error.message);
       
      alert(result.error.message )
     })
     
    }
   
  }
}

  // fetchAcc(event:any){
  //   this.acno= event.target.value
  // }

  // fetchpswd(event:any){
  //   this.pswd= event.target.value
  // }

//   authentication(){
//     var acno=this.acno;
//     var pswd=this.pswd;
//     let accDetails= this.users;
//     if(acno in accDetails){
//       if(pswd == accDetails[acno]["password"]){
//         alert("successfully loged in")
//       }
//       else{
//         alert("invalid passord")
//       }
//     }
//     else{
//       alert(" inavlid account details")
//     }
//   }
// }
