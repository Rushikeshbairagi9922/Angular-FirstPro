import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Power'
})
export class PipeTaskPipe implements PipeTransform {

  transform(base: number, exponent: number): number {

  
    return Math.pow(base,exponent);
  }

}
        