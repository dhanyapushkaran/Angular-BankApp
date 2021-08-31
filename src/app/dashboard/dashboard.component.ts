import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno:any
  pwd = ""
  amount = ""
  acno1 = ""
  pwd1 = ""
  amount1 = ""
  userName: any

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) {
    this.userName = localStorage.getItem("userName")
  }

  ngOnInit(): void {
  }
  
  delete(){
    this.acno= localStorage.getItem("currentAcc")
  }
  deletefromParent(event:any){
    alert(event)
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")

      }
    }, result=>{
      alert(result.error.message)
    })
  }
  cancel(){
    this.acno=""
  }

  logout(){
    alert("successfully logged out")
  }

  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var amount = this.depositForm.value.amount
      var pwd = this.depositForm.value.pswd
      this.ds.deposit(acno, pwd, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        }, result => {
          alert(result.error.message)
        })

    }

  }


  withdraw() {
    if (this.withdrawForm.valid) {
      var acno1 = this.withdrawForm.value.acno1
      var amount1 = this.withdrawForm.value.amount1
      var pwd1 = this.withdrawForm.value.pswd1
      this.ds.withdraw(acno1, pwd1, amount1)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        }, result => {
          alert(result.error.message)
        })

    }

  }
}