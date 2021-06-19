import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {Payment} from "../models/Gasto";
import {PaymentList} from "../models/GastoLista";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  Url = "https://app-saver-api.herokuapp.com/outcomes";

  // @ts-ignore
  private payments: PaymentList = new PaymentList();

  getPayments(): Observable<Payment> {
    return this.http.get<Payment>(this.Url);
  }
  get paymentList(): PaymentList{
    return this.payments;
  }

  create(data: any): Observable<any> {
    return this.http.post(this.Url,data);
  }

  get Payments(): PaymentList{
    return this.payments;
  }
}
