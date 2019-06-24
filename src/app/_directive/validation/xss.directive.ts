import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Directive({
  selector: '[morsXss]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: XssDirective, multi: true }
  ]
})
export class XssDirective implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    const check: RegExp = new RegExp('<(|/|[^/>][^>]+|/[^>][^>]+)>');
    if (!c.value || c.value === '' || !check.test(c.value)) {
      return null;
    }
    return {
      xss: {
        valid: false
      }
    };
  }
}
