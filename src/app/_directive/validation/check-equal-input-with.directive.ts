import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[morsCheckEqualInputWith]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckEqualInputWithDirective,
      multi: true
    }
  ]
})
export class CheckEqualInputWithDirective implements Validator {
  @Input() morsCheckEqualInputWith: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.morsCheckEqualInputWith);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
    }

    return null;
  }
}

// Credit: http://csharp-video-tutorials.blogspot.com/2018/03/angular-password-and-confirm-password.html
