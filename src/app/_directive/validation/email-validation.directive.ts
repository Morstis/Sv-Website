import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[morsEmailValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true
    }
  ]
})
export class EmailValidationDirective {
  validate(c: FormControl): { [key: string]: any } {
    const check: RegExp = new RegExp('[a-z]+.[a-z]+@hag-iserv.de');
    if (!c.value || c.value === '' || check.test(c.value)) {
      return null;
    }

    return {
      emailValid: {
        valid: false
      }
    };
  }
}
