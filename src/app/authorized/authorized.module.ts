import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { AuthorizedRoutingModule } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AuthorizedComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
    ToastModule

=======
    ToastModule,
>>>>>>> bd57c4928c9b76f39f2a6b7b1b68c4aa8731a43c
  ]
})
export class AuthorizedModule { }
