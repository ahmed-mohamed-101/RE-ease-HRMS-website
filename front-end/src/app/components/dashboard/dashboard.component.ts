import { HttpErrorResponse } from '@angular/common/http';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 constructor(private _PaymentService:PaymentService){}

  ngOnInit(): void {
    this._PaymentService.confirmpayment().subscribe({
      next:(Response) => {
        console.log(Response)
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
