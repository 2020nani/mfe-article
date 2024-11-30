import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlFormatter'
})
export class UrlFormatterPipe implements PipeTransform {

  transform(value: string): string {
    return __webpack_public_path__ + value;
  }

}
