import { UserDto } from './../../models/userDto';
import { AuthService } from './../../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required],
      addressFormControl: ['', Validators.required],
      nameFormControl: ['', Validators.required]
    });
  }

  ngOnInit() {}

  register() {
    const { emailFormControl, passwordFormControl, nameFormControl, addressFormControl } = this.registerForm.value;
    const userDto: UserDto = {
      email: emailFormControl,
      password: passwordFormControl,
      name: nameFormControl,
      address: addressFormControl
    };
    this.authService.register(userDto).subscribe(result => {
      this.router.navigate(['/client/login']);
    });
  }
}
