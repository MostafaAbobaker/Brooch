import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword:boolean = false;
  constructor(private _authService:AuthService , private _router:Router) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })


  login(form: FormGroup) {
    console.log(form.value);
    this._router.navigate(['/home'])
    // if(form.valid) {
    //   this.isLoading = true
    //   this._authService.login(form.value).subscribe({
    //     next:(data) => {
    //       // console.log(data)
    //       this.isLoading = false;
    //       localStorage.setItem("userToken",data.token)
    //       this._authService.getUserData()
    //       this._router.navigate(['/home'])

    //     },
    //     error:(err) => {
    //       this.errApi = err.error.errors.msg;
    //       this.errApi = err.errors.message;
    //       console.log(err);
    //     },

    //   })
    // }
  }
}
