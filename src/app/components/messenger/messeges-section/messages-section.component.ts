import {Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnChanges} from '@angular/core';
import {scrollSubject$} from '../messenger.component';
import {delay} from 'rxjs/operators';
import {PersonalDataType} from '../../../services/auth/auth.service';

export interface MessageDataType {
  messageText: string;
  messageTime: Date;
  userId: number;
}

@Component({
  selector: 'app-messages-section',
  templateUrl: './messages-section.component.html',
  styleUrls: ['./messages-section.component.scss']
})
export class MessagesSectionComponent implements OnDestroy {
  @ViewChild('messagesInput', { static: false }) messagesInput: ElementRef;
  @ViewChild('scrollableMessagesWrapper', { static: false }) messagesWrapper: ElementRef;
  @Input() public isAnyUserSelected: boolean;
  @Input() public selectedUserData: PersonalDataType;
  @Output() public addNewMessage = new EventEmitter<MessageDataType>();
  public isInputHasLetter: boolean;
  public newTextMessage: string;

  constructor() {
    scrollSubject$.pipe(delay(200)).subscribe(() => {
      this.scrollOnAddMessage();
    });
  }

  public onAddMessage(): void {
    if (!this.newTextMessage) {
      this.messagesInput.nativeElement.focus();
      return;
    }

    this.addNewMessage.emit({
      messageText: this.newTextMessage,
      messageTime: new Date(),
      userId: this.selectedUserData.id,
    });
    this.newTextMessage = '';
    this.isInputHasLetter = false;
    this.messagesInput.nativeElement.focus();
  }

  public onEnterKeyPress(event: any): void {
    if (event.key === 'Enter') {
      this.onAddMessage();
    }
  }

  public onCheckInputInner(message: string): void {
    this.newTextMessage = message.trim();
    this.newTextMessage ? this.isInputHasLetter = true : this.isInputHasLetter = false;
  }

  private scrollOnAddMessage(): void {
    this.messagesWrapper.nativeElement.scrollTop = this.messagesWrapper.nativeElement.scrollHeight;
  }

  ngOnDestroy(): void {
    scrollSubject$.next();
    scrollSubject$.complete();
  }
}

