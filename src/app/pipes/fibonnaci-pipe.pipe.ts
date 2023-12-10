import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator'

@Pipe({
  name: 'fibonnaciPipe',
  pure : true
})
export class FibonnaciPipePipe implements PipeTransform {
  @memo()
  transform(value: number): number {
    console.log(value);    
    return this.fibonnaci(value);
  }
  @memo()
  fibonnaci(n: number) : number{
    if (n==1 || n==0) {
      return 1;
    }
    return this.fibonnaci(n-1) + this.fibonnaci(n-2);
  }

}
