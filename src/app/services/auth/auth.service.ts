import { Injectable } from '@angular/core';

export interface authUserDataType {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}

export interface MessageData {
  messageText: string;
  messageTime: Date;
}

export interface PersonalDataType {
  id: number;
  firstName: string;
  lastName: string;
  img: string;
  messages: MessageData[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _usersData = [
    {
      id: 1,
      firstName: 'Maria',
      lastName: 'Bernal',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 2,
      firstName: 'Pavel',
      lastName: 'Filimonchyk',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 3,
      firstName: 'Kirill',
      lastName: 'Sereda',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 4,
      firstName: 'Roman',
      lastName: 'Osipov',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 5,
      firstName: 'Anastasia',
      lastName: 'Baranovskaya',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 6,
      firstName: 'Tony',
      lastName: 'Stark',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 7,
      firstName: 'Rafael',
      lastName: 'Nadal',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 8,
      firstName: 'Lucas',
      lastName: 'Gerhard',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 9,
      firstName: 'Leo',
      lastName: 'Chikas',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 10,
      firstName: 'Victor',
      lastName: 'Kram',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 11,
      firstName: 'Roman',
      lastName: 'Abramovich',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 12,
      firstName: 'Derris',
      lastName: 'Nicolson',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 13,
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 14,
      firstName: 'Leonel',
      lastName: 'Messi',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 15,
      firstName: 'Derris',
      lastName: 'Ronald',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 16,
      firstName: 'Vilena',
      lastName: 'Crid',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    },
    {
      id: 17,
      firstName: 'Red',
      lastName: 'Sigal',
      img: '../../assets/img/logo.jpeg',
      messages: [
        {messageText: 'hello for everyone', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
        {messageText: 'can you text message?', messageTime: new Date()},
        {messageText: 'yoyoyo', messageTime: new Date()},
        {messageText: 'full chill', messageTime: new Date()},
      ]
    }
  ];
  public isAuth: boolean = false;

  public authUserData: authUserDataType = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  }

  public get getUsers(): PersonalDataType[] {
    return this._usersData;
  }
}
