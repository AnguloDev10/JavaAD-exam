import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../../services/payment.service";
import {Payment} from "../../models/Gasto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls: ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {
  payments: any[] | undefined;

  constructor(private paymentService: PaymentService, private router: Router) { }
  totalpayment=0;
  ngOnInit(): void {
    this.loadPayments();
  }
  loadPayments(): void{
    this.paymentService.getPayments().subscribe((resp :any)=>{
      this.payments = resp
      this.payments?.forEach((payment)=>{
        this.totalpayment = this.totalpayment+ payment.amount;

      })
      console.log(resp);
    })
  }
  getPaymentIndex(payment: Payment): number{
    return this.paymentService.paymentList.paymentList.findIndex(
      value => value === payment
    );
  }
  create() {
    this.router.navigateByUrl('create');
  }

  isPaymentSelected(payment: Payment): boolean{
    return this.getPaymentIndex(payment) > -1;
  }


}

