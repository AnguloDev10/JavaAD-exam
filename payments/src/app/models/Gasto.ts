export class Payment {
  amount:number;
  detail:string;
  createdAt: Date;
  updateAt: Date;
  constructor() {
    this.amount=0;
    this.detail ="";
    this.createdAt = new Date();
    this.updateAt = new Date();
  }

}
