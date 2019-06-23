import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';
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
export class KlasseValidationDirective {
  @Input('morsKlasseValidation') options: any;
  constructor(private http: HttpClient) {}
  klasse: any;
  validate(c: FormControl): { [key: string]: any } {
    if (!this.options) {
      return;
    }
    if (!c.value || c.value === '') {
      return null;
    } else {
      this.http
        .get('https://api.opossum.media/public/mobileapps/hag/KlassenListe.php')
        .subscribe(klasse => {
          this.klasse = klasse;
        });
    }
    for (const item in this.klasse) {
      if (this.klasse[item] === c.value.toUpperCase()) {
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
