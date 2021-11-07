import {Component, Input} from '@angular/core';
import {MessageData} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: MessageData;
}
