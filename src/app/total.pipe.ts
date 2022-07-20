import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args: string): any {
    return value?.reduce((acumulado:any, current:any) => acumulado + current[args], 0);
  }

}
