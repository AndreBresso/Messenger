import {Component, Input} from '@angular/core';
import {PersonalDataType} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-message-options-block',
  templateUrl: './message-options-block.component.html',
  styleUrls: ['./message-options-block.component.scss']
})
export class MessageOptionsBlockComponent {
  @Input() selectedUserData: PersonalDataType;
}
