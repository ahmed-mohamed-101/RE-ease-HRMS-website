import { Component } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
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


// email: any;

// ngOnInit() {
//   // localStorage.setItem('etoken', 'nmbvhmv');
//   // console.log(localStorage.getItem('etoken'))
//   console.log(this._PaymentService.token)
//   const email = 'RealeStateEase@gmail.com';
//   this.email = this.santizer

//   .bypassSecurityTrustHtml(email);
// }


}


