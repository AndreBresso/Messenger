export interface AuthUserData {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  userContactList: ContactData[] | null,
}

export interface ContactData {
  id: number;
  firstName: string;
  lastName: string;
  img: string;
  messages: MessageData[];
}

export interface MessageData {
  messageText: string;
  messageTime: Date;
}

export interface SubmittedData {
  login: string;
  password: string;
}
