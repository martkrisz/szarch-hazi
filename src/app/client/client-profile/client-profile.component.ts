import { AuthService } from './../../shared/auth.service';
import { UserDto } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  profileForm: FormGroup;
  loyaltyPoints: number;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm = this.fb.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required],
      addressFormControl: ['', Validators.required],
      nameFormControl: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.profileForm.get('emailFormControl').setValue(profile.email);
      this.profileForm.get('nameFormControl').setValue(profile.name);
      this.profileForm.get('addressFormControl').setValue(profile.address);
      this.profileForm.get('emailFormControl').disable();
      this.loyaltyPoints = profile.loyaltyPoints;
    });
  }

  editProfile() {
    const { emailFormControl, passwordFormControl, nameFormControl, addressFormControl } = this.profileForm.getRawValue();
    const userDto: UserDto = {
      email: emailFormControl,
      password: passwordFormControl,
      name: nameFormControl,
      address: addressFormControl
    };
    this.authService.editProfile(userDto).subscribe();
  }
}
