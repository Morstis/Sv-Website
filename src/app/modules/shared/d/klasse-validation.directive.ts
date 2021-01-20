import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';
import { LoaderService } from '../s/loader.service';

@Directive({
  selector: '[lwKlasseValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: KlasseValidationDirective,
      multi: true,
    },
  ],
})
export class KlasseValidationDirective implements Validator {
  constructor(
    private fireFunction: AngularFireFunctions,
    loaderService: LoaderService
  ) {
    this.fireFunction
      .httpsCallable('getOnlyKlassen')(null)
      .pipe(take(1))
      .subscribe((res) => (this.klassen = res));
  }
  klassen: string[];

  validate(c: FormControl): { klasseValid: { valid: boolean } } | null {
    // prüft, ob die value gesetzt oder leer ist

    if (!c.value || c.value === '') {
      return null;
    } else {
      for (const item in this.klassen) {
        if (this.klassen[item].toUpperCase() === c.value.toUpperCase()) {
          return null;
        }
      }

      return {
        klasseValid: {
          valid: false,
        },
      };
    }
  }
}
