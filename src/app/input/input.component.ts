import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string = '';
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    //<nn>
    // Check if input is used, and has errors.
    //</nn>
    return this.control.touched && this.control.dirty && this.control.errors;
  }
}
