import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(value: any, price: any, stock: any): any {
    return value?.reduce((acumulado:any, current:any) => acumulado + (current[price] * current[stock]), 0);
  }

}
