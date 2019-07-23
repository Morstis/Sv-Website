import { Component, Input, Optional } from '@angular/core';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mors-show-error',
  template: `
    <div *ngIf="errorMessages" class="error">
      <div *ngFor="let errorMessage of errorMessages">
        {{ errorMessage }}
      </div>
    </div>
  `
})
export class ShowErrorComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('path') controlPath;
  // tslint:disable-next-line: no-input-rename
  @Input('text') displayName = '';

  constructor(private ngForm: NgForm) {}

  get errorMessages(): string[] {
    const messages = [];
    const form: FormGroup = this.ngForm.form;
    const control = form.get(this.controlPath);
    if (!control || !control.touched || !control.errors) {
      return null;
    }
    for (const code in control.errors) {
      if (control.errors.hasOwnProperty(code)) {
        const error = control.errors[code];
        let message = '';
        switch (code) {
          case 'required':
            message = `\"${this.displayName}\" ist ein Pflichtfeld.`;
            break;
          case 'minlength':
            message = `${this.displayName} muss mindestens ${
              error.requiredLength
            } Zeichen enthalten.`;
            break;
          case 'maxlength':
            message = `\"${this.displayName}\" darf maximal ${
              error.requiredLength
            } Zeichen enthalten.`;
            break;
          case 'emailValid':
            message = `Bitte gebe deine Iserv Email Adresse an.`;
            break;
          case 'klasseValid':
            message = `Bitte gebe deine Klasse an (z.B. 10FLS).`;
            break;
          case 'xss':
            message = `Der Ausdruck \"<x>\" ist nicht erlaubt.`;
            break;
          case 'notEqual':
            message = `Die Passwöter stimmen nicht überein.`;
            break;
          default:
            message = `${name} ist nicht valide`;
        }
        messages.push(message);
      }
    }
    return messages;
  }
}
