import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../shared/rendezVous';
import { RendezvousService } from './../shared/rendezvous.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Bookings = [];

  constructor(
    private rvService: RendezvousService
  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.rvService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Rendezvous);
      })
    })
  }

  fetchBookings() {
    this.rvService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Voulez-vous vraiment supprimer ?')) {
      this.rvService.deleteBooking(id)
    }
  }
}