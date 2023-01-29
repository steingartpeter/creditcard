import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFromControl } from '../date-from-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
      //Validators.pattern(/\s/),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(19),
      //Validators.pattern(/^4[0-9]{19}/),
    ]),
    expiration: new DateFromControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  constructor() {
    //console.log(this.cardForm.controls.name);
    console.log(this.cardForm.get('name'));
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submission...');
  }
}
