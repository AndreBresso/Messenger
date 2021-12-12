import {Component, Input} from '@angular/core';
import {ContactData} from '../../../../../assets/interfaces';

@Component({
  selector: 'app-message-options-block',
  templateUrl: './message-options-block.component.html',
  styleUrls: ['./message-options-block.component.scss']
})
export class MessageOptionsBlockComponent {
  @Input() selectedUserData: ContactData;
}
