import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [
    AuthService
  ]
})
export class AuthModule { }
