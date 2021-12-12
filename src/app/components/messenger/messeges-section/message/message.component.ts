import {Component, Input} from '@angular/core';
import {MessageData} from '../../../../../assets/interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: MessageData;
}
