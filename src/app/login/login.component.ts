import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="welcome to SBL Bank"
  acNum="Account no please"
  acno=""
  pswd=""
  
  users:any={
    1000: { acno:1000, username:"jio", password: "jio",balance: 5000},
    1001: { acno:1001, username:"sam", password: "sam",balance: 4000},
    1002: { acno:1002, username:"ram", password: "ram",balance: 6000},
    1003: { acno:1003, username:"raju",password: "raju",balance: 7000},
    1004: { acno:1004, username:"lio", password: "lio",balance: 9000}
  }
  constructor() { }

  ngOnInit(): void {
  }
  fetchAcc(event:any){
    this.acno= event.target.value
  }

  fetchpswd(event:any){
    this.pswd= event.target.value
  }

  authentication(){
    var acno=this.acno;
    var pswd=this.pswd;
    let accDetails= this.users;
    if(acno in accDetails){
      if(pswd == accDetails[acno]["password"]){
        alert("successfully loged in")
      }
      else{
        alert("invalid passord")
      }
    }
    else{
      alert(" inavlid account details")
    }
  }
}
