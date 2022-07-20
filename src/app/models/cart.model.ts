export class Cart {
  id: number;
  name: string;
  amount: number;
  price: number;
  total: number;

  constructor(id: number, name: string, amount: number, price: number, total: number) {
    this.id = id,
    this.name = name,
    this.amount = amount,
    this.price = price,
    this.total = total
  }
}
