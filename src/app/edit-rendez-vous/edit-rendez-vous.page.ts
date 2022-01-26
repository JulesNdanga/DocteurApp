import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { RendezvousService } from './../shared/rendezvous.service';

@Component({
  selector: 'app-edit-rendez-vous',
  templateUrl: './edit-rendez-vous.page.html',
  styleUrls: ['./edit-rendez-vous.page.scss'],
})

export class EditRendezVousPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private rvService: RendezvousService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.rvService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.rvService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}