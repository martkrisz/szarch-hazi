import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationDto } from './../../models/models';
import { WaiterService } from '../waiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private waiterService: WaiterService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      tableFormControl: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      dateFormControl: ['', Validators.required],
      durationFormControl: ['', [Validators.required, Validators.max(4), Validators.min(1)]],
      personFormControl: ['', [Validators.required, Validators.max(10), Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.searchForm.get('dateFormControl').setValue(new Date);
  }

  makeReservation() {
    const {
      dateFormControl,
      personFormControl,
      durationFormControl,
      tableFormControl
    } = this.searchForm.value;
    const reservation: ReservationDto = {
      tableId: tableFormControl,
      time: dateFormControl,
      personNumber: personFormControl,
      duration: durationFormControl
    };
    this.waiterService.makeReservation(reservation).subscribe(() => {
      this.router.navigate(['waiter/reservations']);
    });
  }
}
