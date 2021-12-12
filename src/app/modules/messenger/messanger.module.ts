import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from '../../components/messenger/contact/contact.component';
import {MessagesSectionComponent} from '../../components/messenger/messeges-section/messages-section.component';
import {MessageOptionsBlockComponent} from '../../components/messenger/messeges-section/message-options-block/message-options-block.component';
import {MessageComponent} from '../../components/messenger/messeges-section/message/message.component';
import {MessengerComponent} from '../../components/messenger/messenger.component';
import {SearchPipe} from '../../pipes/name-filter-pipe/search.pipe';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {AppRoutingModule} from '../../app-routing.module';
import {UserMenuComponent} from '../../components/messenger/user-menu/user-menu.component';

@NgModule({
  declarations: [
    ContactComponent,
    MessagesSectionComponent,
    MessageOptionsBlockComponent,
    MessageComponent,
    MessengerComponent,
    UserMenuComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
})
export class MessengerModule { }
