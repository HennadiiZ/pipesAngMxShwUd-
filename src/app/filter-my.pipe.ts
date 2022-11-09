import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMy',
  pure: false
})
export class FilterMyPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
