import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumbers'
})
export class RoundNumbersPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    debugger;
    let n = 100;
    if(args && args.length > 0){
      n = Math.pow(10, args[0]);

    }

    return Math.round(n * value) / n;
  }

}
