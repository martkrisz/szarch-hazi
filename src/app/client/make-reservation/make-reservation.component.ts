import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationDto } from './../../models/models';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {
  isSearched = false;
  results = [];
  searchForm: FormGroup;

  constructor(private clientService: ClientService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      dateFormControl: ['', Validators.required],
      durationFormControl: ['', [Validators.required, Validators.max(5)]],
      personFormControl: ['', [Validators.required, Validators.max(10), Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.searchForm.get('dateFormControl').setValue(new Date());
  }

  search() {
    const { dateFormControl, personFormControl, durationFormControl } = this.searchForm.value;
    this.clientService
      .searchForTable(dateFormControl, personFormControl, durationFormControl)
      .subscribe(results => {
        this.results = results;
        console.log(this.results);
        this.isSearched = true;
      });
  }

  makeReservation(tableId: string) {
    const { dateFormControl, personFormControl, durationFormControl } = this.searchForm.value;
    const reservation: ReservationDto = {
      tableId: tableId,
      time: dateFormControl,
      personNumber: personFormControl,
      duration: durationFormControl
    };
    this.clientService.makeReservation(reservation).subscribe(() => {
      this.isSearched = false;
    });
  }
}
