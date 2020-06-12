import { Time } from '@angular/common';
import { Customer } from './customer';
import { OrderRow } from './orderRow';

export class Order {
  companyId: number;
  // createdBy: Customer;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  orderRows: OrderRow[];

  constructor(companyId: number, createdBy: string, paymentMethod: string, totalPrice: number, orderRows: OrderRow[]){
    this.companyId = companyId;
    this.createdBy = createdBy;
    this.paymentMethod = paymentMethod;
    this.totalPrice = totalPrice;
    this.orderRows = orderRows;
  }
}