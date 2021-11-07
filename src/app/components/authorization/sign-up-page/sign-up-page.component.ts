import { Component } from '@angular/core';
import { ImagePaths } from '../login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  public isPasswordShown: boolean = false;
  public passwordIconPath: string = ImagePaths.PasswordIsHidden;
  public passwordInputType: string = 'password';

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    if (this.authService.isAuth) {
      this.router.navigateByUrl("/main");
    }
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
