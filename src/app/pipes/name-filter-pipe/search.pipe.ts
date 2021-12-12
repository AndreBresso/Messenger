import { Pipe, PipeTransform } from '@angular/core';
import {ContactData} from '../../../assets/interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(contacts: ContactData[], searchRequest: string): ContactData[] {
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
