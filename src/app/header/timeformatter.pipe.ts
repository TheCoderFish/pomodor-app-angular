import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeformatter'
})
export class TimeformatterPipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
