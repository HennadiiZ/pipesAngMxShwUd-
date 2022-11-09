import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(value:any): any {

  //   if(value.length > 10) {
  //     return value.substr(0, 10) + ' ...';
  //   }
  //   return value;
  // }

  transform(value: any, limit: number): any {

    if(value.length > limit) {
      return value.substr(0,  limit) + ' ...';
    }
    return value;
  }

}
