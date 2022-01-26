import { Injectable } from '@angular/core';
import { Rendezvous } from '../shared/Rendezvous';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class RendezvousService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(rv: Rendezvous) {
    return this.bookingListRef.push({
      name: rv.name,
      email: rv.email,
      mobile: rv.mobile
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/rendezvous/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/rendezvous');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id,rv: Rendezvous) {
    return this.bookingRef.update({
      name: rv.name,
      email: rv.email,
      mobile: rv.mobile
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/rendezvous/' + id);
    this.bookingRef.remove();
  }
}