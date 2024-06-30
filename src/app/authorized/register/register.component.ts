import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ReturnData } from '../../models/return-data.model';
import { RegisterOwnerDto } from '../../models/register-owner.dto';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent {
  showPassword:boolean = false;
  showRePassword:boolean = false;
  constructor(private _authService:AuthService , private _router:Router,private apiService: ApiService,private _messageService: MessageService) { }
  message: string = '';
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.maxLength(13) , Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(13)]),

  })
  onSubmit(): void {
    debugger;
    if (this.registerForm.valid) {
      const registerData: RegisterOwnerDto = {
        fullName: this.registerForm.value.name,
        phoneNumber: this.registerForm.value.phone,
        emailAddress: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      this.apiService.post<any>('Auth/register', registerData).subscribe({
        next: (response: ReturnData<any>) => {
          if (response.isSuccess) {
            this._messageService.add({ severity: 'success', summary: 'Success', detail: response.message });
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
  }

  register(form: FormGroup) {
    console.log(form.value);
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
