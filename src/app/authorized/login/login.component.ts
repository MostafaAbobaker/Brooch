import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../services/api.service';
import { LoginOwnerDto } from 'src/app/models/login-owner-dto';
import { ReturnData } from 'src/app/models/return-data.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  message: string = '';
  isLoading: boolean = false;
  showPassword:boolean = false;
  constructor(private _authService:AuthService , private _router:Router,private apiService: ApiService,private _messageService: MessageService) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })


  login() {
    debugger;
    if (this.loginForm.valid) {
      this.isLoading = true
      const registerData: LoginOwnerDto = {
        emailAddress: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.apiService.post<any>('Auth/login', registerData).subscribe({
        next: (response: ReturnData<any>) => {
          if (response.isSuccess) {
            this.isLoading = false;
            localStorage.setItem("userToken",response.token);
            this._authService.getUserData();
            this._router.navigate(['admin/tasks']);
          } else {
            this._messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
          }
        },
        error: (err) => {
          this.message = 'حدث خطأ ما أثناء العملية';
          this._messageService.add({ severity: 'error', summary: 'Error', detail: this.message });
        }
      });
    } 
    else {
      this.message = 'حدث خطأ ما أثناء العملية';
      this._messageService.add({ severity: 'error', summary: 'Error', detail: this.message });
    }
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
