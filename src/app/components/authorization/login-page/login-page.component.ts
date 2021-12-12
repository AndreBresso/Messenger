import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmittedData} from '../../../../assets/interfaces';

export enum ImagePaths {
  PasswordIsHidden = '../../assets/img/eye-visible.png',
  PasswordIsVisible = '../../assets/img/eye-hidden.png'
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public isPasswordShown: boolean = false;
  public passwordIconPath: string = ImagePaths.PasswordIsHidden;
  public passwordInputType: string = 'password';
  public passwordLength: number = 6;
  public loginForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    if (this.authService.isAuth) {
      this.router.navigateByUrl("/main");
      return;
    }

    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.passwordLength),
      ]),
    });
  }

  public submitLoginForm(): void {
    const submittedData: SubmittedData = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password,
    };

    this.authService.getAuthUser(submittedData);
  }

  public changePasswordStatus(): void {
    this.isPasswordShown = !this.isPasswordShown;

    this.isPasswordShown ?
      this.passwordInputType = 'text' :
      this.passwordInputType = 'password';

    this.isPasswordShown ?
      this.passwordIconPath = ImagePaths.PasswordIsVisible :
      this.passwordIconPath = ImagePaths.PasswordIsHidden;
  }
}
