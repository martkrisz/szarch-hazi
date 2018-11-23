import { AdminService } from './../admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserDto } from './../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-waiter',
  templateUrl: './register-waiter.component.html',
  styleUrls: ['./register-waiter.component.scss']
})
export class RegisterWaiterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required],
      nameFormControl: ['', Validators.required],
    });
  }

  register() {
    const { emailFormControl, passwordFormControl, nameFormControl } = this.registerForm.value;
    const userDto: UserDto = {
      email: emailFormControl,
      password: passwordFormControl,
      name: nameFormControl,
    };
    this.adminService.registerWaiter(userDto).subscribe(result => {
      this.router.navigate(['admin/waiters']);
    });
  }
}
