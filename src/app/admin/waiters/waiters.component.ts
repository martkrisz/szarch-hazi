import { UserDto } from './../../models/models';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.scss']
})
export class WaitersComponent implements OnInit {

  waiters: UserDto[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getWaiters();
  }

  getWaiters() {
    this.adminService.getWaiters().subscribe(waiters => this.waiters);
  }

  deleteWaiter(id: string) {
    this.adminService.deleteWaiter(id).subscribe(() => {
      this.getWaiters();
    });
  }

}
