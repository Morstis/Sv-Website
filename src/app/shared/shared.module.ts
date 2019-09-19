import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Form Directives
import { ShowErrorComponent } from '../_components/show-error.component';
import { EmailValidationDirective } from '../_directive/validation/email-validation.directive';
import { KlasseValidationDirective } from '../_directive/validation/klasse-validation.directive';
import { CheckEqualInputWithDirective } from '../_directive/validation/check-equal-input-with.directive';
import { XssDirective } from '../_directive/validation/xss.directive';

@NgModule({
  declarations: [
    ShowErrorComponent,
    EmailValidationDirective,
    KlasseValidationDirective,
    XssDirective,
    CheckEqualInputWithDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ShowErrorComponent,
    EmailValidationDirective,
    KlasseValidationDirective,
    XssDirective,
    CheckEqualInputWithDirective,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule {}
