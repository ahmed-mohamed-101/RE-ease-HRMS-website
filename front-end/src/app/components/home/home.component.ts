import { Component } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _PaymentService:PaymentService){}

handlepaymentannually():void{
  this._PaymentService.checkoutannually().subscribe({
    next:(response)=>{
      console.log(response.url)
      window.open(response.url,'_self')
    }
 })
}

handlepaymentmonthly():void{
  this._PaymentService.checkoutmonthly().subscribe({
    next:(response)=>{
      console.log(response.url)
      window.open(response.url,'_self')
    }
 })
}



}
