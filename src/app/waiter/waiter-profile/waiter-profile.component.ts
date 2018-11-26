import { AuthService } from './../../shared/auth.service';
import { UserDto } from './../../models/userDto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiter-profile',
  templateUrl: './waiter-profile.component.html',
  styleUrls: ['./waiter-profile.component.scss']
})
export class WaiterProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.profileForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required],
      nameFormControl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.profileForm.get('emailFormControl').setValue(profile.email);
      this.profileForm.get('nameFormControl').setValue(profile.name);
      this.profileForm.get('emailFormControl').disable();
      this.profileForm.get('nameFormControl').disable();
    });
  }

  editProfile() {
    const { emailFormControl, nameFormControl, passwordFormControl } = this.profileForm.getRawValue();
    const userDto: UserDto = {
      email: emailFormControl,
      password: passwordFormControl,
      name: nameFormControl,
      address: 'Waiters have no address'
    };
    this.authService.editProfile(userDto).subscribe(() => this.router.navigate(['waiter/reservations']));
  }

}
