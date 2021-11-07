import {Component, Input, OnInit} from '@angular/core';
import {PersonalDataType} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() public userData: PersonalDataType;
  @Input() public isSelected: boolean;
  public lastMessage: string;
  public lastMessageTime: Date;

  ngOnInit(): void {
    const lastMessageNumber = this.userData.messages.length - 1;
    this.lastMessage = this.userData.messages[lastMessageNumber].messageText;
    this.lastMessageTime = this.userData.messages[lastMessageNumber].messageTime;
  }
}
