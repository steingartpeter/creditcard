import { FormControl } from '@angular/forms';

export class DateFromControl extends FormControl {
  override setValue(value: string, options: any) {
    console.log('v: ' + value);
    //<nn>
    // If the input is not a digit, and not a /, then we send just the old value, and not the new one.
    //</nn>
    if (value.match(/[^0-9|\/]/gi)) {
      value = this.value;
    }
    //<nn>
    // If we reached the 5 charcater long input we deny further updates
    //</nn>
    if (value.length > 5) {
      value = this.value;
    }

    //<nn>
    // If the length of the value is 2 (digits) then we add the / element.
    //</nn>
    if (value.length == 2) {
      if (this.value.length !== 3) {
        value = value + '/';
      }
    }

    //<nn>
    // If the length of the value is 2 (digits) then we add the / element.
    //</nn>
    if (value.length == 2) {
      if (this.value.length !== 3) {
        value = value + '/';
      }
    }

    //<nn>
    // Set emitModelToView... tot ru, to see the value manipulation in DOM as well
    //</nn>
    options.emitModelToViewChange = true;
    super.setValue(value, options);
  }
}
