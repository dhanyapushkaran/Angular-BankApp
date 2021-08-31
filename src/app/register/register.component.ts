import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno = ""
  uname = ""
  pswd = ""
  aim = "Welcome to Net Banking"
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      var acno = this.registerForm.value.acno
      var uname = this.registerForm.value.uname
      var pswd = this.registerForm.value.pswd

      this.ds.register(acno, uname, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        }, (result) => {
          console.log(result);
            
          alert(result.error.message)
          this.router.navigateByUrl("")
        })
     
      

      }
    else {
      alert("invalid form")
    }
  }
}