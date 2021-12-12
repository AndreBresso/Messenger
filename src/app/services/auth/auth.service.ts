import {Injectable} from '@angular/core';
import {AuthUserData, ContactData, SubmittedData} from '../../../assets/interfaces';
import {DataBase} from '../../../assets/data-base';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: boolean;
  public authUserData: AuthUserData | {} = {};
  public userContacts: ContactData[] = [];

  constructor(
    private readonly dataBase: DataBase,
    private readonly router: Router,
    ) { }

  public getAuthUser({ login, password }: SubmittedData): void {
    const authUser =  this.dataBase.usersList.find(user => {
      return user.email.toLowerCase() === login.toLowerCase() && user.password === password;
    });

    if (!authUser) {
      return;
    }

    this.authUserData = {...authUser};
    this.userContacts = [...authUser.userContactList];
    this.isAuth = true;
    this.router.navigateByUrl("/main");
  }

  public get getUsers(): ContactData[] {
    return this.userContacts;
  }
}
