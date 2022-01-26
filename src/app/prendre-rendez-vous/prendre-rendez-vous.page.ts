import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { RendezvousService } from './../shared/rendezvous.service';
@Component({
  selector: 'app-prendre-rendez-vous',
  templateUrl: './prendre-rendez-vous.page.html',
  styleUrls: ['./prendre-rendez-vous.page.scss'],
})
export class PrendreRendezVousPage implements OnInit {
bookingForm: FormGroup;
  constructor(private rvService: RendezvousService,
    private router: Router,
    public fb: FormBuilder
    ) {}

  ngOnInit() {
     this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.rvService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
