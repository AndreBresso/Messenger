import { Component } from '@angular/core';
import { AuthService, PersonalDataType } from '../../services/auth/auth.service';
import { MessageDataType } from './messeges-section/messages-section.component';
import { Subject } from 'rxjs';

export const scrollSubject$ = new Subject();

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent {
  public usersData: PersonalDataType[];
  public searchRequest: string;
  public isAnyUserSelected: boolean;
  public selectedUserId: number;
  public selectedUserIndex: number;
  public selectedUserData: PersonalDataType;

  constructor(private readonly authService: AuthService) {
    this.usersData = this.authService.getUsers;
  }

  public changeSelectedUser(userId: number): void {
    this.usersData.forEach((user, index) => {
      if (userId === user.id) {
        this.selectedUserId = userId;
        this.selectedUserIndex = index;
        this.selectedUserData = user;
      }
    });

    this.isAnyUserSelected = true;
  }

  public addNewMessage({ messageText, messageTime, userId }: MessageDataType): void {
    const changedUsersData: PersonalDataType[] = this.usersData.map(( user, index) => {
      if (user.id === userId) {
        return {
          ...user,
          messages: [...user.messages, { messageText, messageTime}]
        }
      }
      return user;
    });

    if (this.selectedUserIndex !== 0) {
      changedUsersData.unshift(changedUsersData[this.selectedUserIndex]);
      changedUsersData.splice(this.selectedUserIndex + 1, 1);
    }

    this.usersData = changedUsersData;
    this.changeSelectedUser(userId);
    scrollSubject$.next();
  }
}
