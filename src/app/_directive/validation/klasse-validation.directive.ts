import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[morsKlasseValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: KlasseValidationDirective,
      multi: true
    }
  ]
})
export class KlasseValidationDirective implements Validator {
  constructor(private http: HttpClient) {}
  klassen: string[];
  validate(c: FormControl): { [key: string]: any } {
    // prüft, ob die value gesetzt oder leer ist
    if (!c.value || c.value === '') {
      return null;
    } else {
      // http request zu opossumts.net, um da die Klassenliste zu holen
      this.http
        .get<string[]>('https://api.opossum.media/public/mobileapps/hag/KlassenListe.php')
        .subscribe(klassen => {
          this.klassen = klassen;
        });
    }

    // basic Iteration
    for (const item in this.klassen) {
      if (this.klassen[item].toUpperCase() === c.value.toUpperCase()) {
        return null;
      }
    }

    return {
      klasseValid: {
        valid: false
      }
    };
  }
}
