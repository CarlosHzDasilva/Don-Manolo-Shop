import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  transform(value: any, currency: string): any {
    let exchanges = new Map();
    exchanges.set('USD', 1.05);
    exchanges.set('GBP', 0.85);
    exchanges.set('RUB', 67.78);
    exchanges.set('CNY', 7.07);

    if (currency !== undefined && exchanges.has(currency)) {
      return value * exchanges.get(currency);
    } else {
      return "Divisa no encontrada";
    }
  }
}
