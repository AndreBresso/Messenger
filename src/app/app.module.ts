import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/common/not-found-page/not-found-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { MessengerModule } from './modules/messenger/messanger.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    MessengerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
