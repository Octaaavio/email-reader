import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'filter',
})
export class EmailFilterPipe implements PipeTransform {
  transform(emailList: Email[], extra: string): Email[] {
    if(extra)
      return emailList.filter(email => (email.from == extra));
    else
    return emailList;

  }
}
