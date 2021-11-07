import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../../components/authorization/login-page/login-page.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})

export class AuthModule { }
