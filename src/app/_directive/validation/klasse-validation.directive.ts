import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { KeksService } from 'src/app/_service/keks.service';

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
  @Input('morsKlasseValidation') options: any;
  constructor(private http: HttpClient) {}
  klasse: any;
  validate(c: FormControl): { [key: string]: any } {
    // testet, ob das Directive gesetzt werden soll
    if (!this.options) {
      return;
    }

    // prüft, ob die value gesetzt oder leer ist
    if (!c.value || c.value === '') {
      return null;
    } else {
      // http request zu opossumts.net, um da die Klassenliste zu holen
      this.http
        .get('https://api.opossum.media/public/mobileapps/hag/KlassenListe.php')
        .subscribe(klasse => {
          this.klasse = klasse;
        });
    }

    // basic Iteration
    for (const item in this.klasse) {
      if (this.klasse[item].toUpperCase() === c.value.toUpperCase()) {
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
