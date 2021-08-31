
import { analyzeNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  userName:any
  acno:any
  transactions: any
 
  constructor(public ds: DataService) {
    this.userName = localStorage.getItem("userName")
   this.acno= localStorage.getItem("currentAcc")
    this.ds.getTransaction(this.acno).subscribe((result: any) => {
      if (result) {
        console.log(result.transaction)

        this.transactions = result.transaction
      }
    }, (result) => {
      alert(result.error.message)

    })
  }

    ngOnInit(): void {
    }
}