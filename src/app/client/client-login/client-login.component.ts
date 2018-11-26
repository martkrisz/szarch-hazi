import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from './../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const { emailFormControl, passwordFormControl } = this.loginForm.value;
    const loginDto: LoginDto = { email: emailFormControl, password: passwordFormControl };
    this.authService.login(loginDto).subscribe(result => {
      if (result === true) {
        this.router.navigate(['client/order']);
      }
    });
  }
}
