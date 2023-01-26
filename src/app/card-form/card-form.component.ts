import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() {
    //console.log(this.cardForm.controls.name);
    console.log(this.cardForm.get('name'));
  }

  ngOnInit(): void {}
}
