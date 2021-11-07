import { Pipe, PipeTransform } from '@angular/core';
import {PersonalDataType} from '../../services/auth/auth.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(contacts: PersonalDataType[], searchRequest: string): PersonalDataType[] {
    if (!searchRequest) {
      return contacts;
    }

    return contacts.filter(contact => {
      const { firstName, lastName } = contact;
      const searchRequestInLowerCase = searchRequest.toLowerCase();
      const fullName = (firstName + " " + lastName).toLowerCase();
      return fullName.includes(searchRequestInLowerCase);
    });
  }
}
