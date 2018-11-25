import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationDto } from './../../models/models';
import { WaiterService } from '../waiter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-reservation',
  templateUrl: './modify-reservation.component.html',
  styleUrls: ['./modify-reservation.component.scss']
})
export class ModifyReservationComponent implements OnInit {
  modifyForm: FormGroup;
  reservation: ReservationDto;

  constructor(
    private waiterService: WaiterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modifyForm = this.fb.group({
      tableFormControl: ['', Validators.required],
      dateFormControl: ['', Validators.required],
      durationFormControl: ['', [Validators.required, Validators.max(240)]],
      personFormControl: ['', [Validators.required, Validators.max(10), Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.waiterService.getReservations().subscribe(reservations => {
      this.route.params.subscribe(params => {
        this.reservation = reservations.find(
          reservation => reservation.reservationId === params['reservationID']
        );
        this.modifyForm.get('tableFormControl').setValue(this.reservation.tableId);
        this.modifyForm.get('dateFormControl').setValue(this.reservation.time);
        this.modifyForm.get('durationFormControl').setValue(this.reservation.duration);
        this.modifyForm.get('personFormControl').setValue(this.reservation.personNumber);
      });
    });
  }

  modifyReservation() {
    const {
      dateFormControl,
      personFormControl,
      durationFormControl,
      tableFormControl
    } = this.modifyForm.value;
    this.reservation.tableId = tableFormControl;
    this.reservation.time = dateFormControl;
    this.reservation.personNumber = personFormControl;
    this.reservation.duration = durationFormControl;
    this.waiterService.editReservation(this.reservation).subscribe(() => {
      this.router.navigate(['waiter/reservations']);
    });
  }
}
