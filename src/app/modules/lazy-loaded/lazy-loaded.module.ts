import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { SignUpPageComponent } from '../../components/authorization/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }
