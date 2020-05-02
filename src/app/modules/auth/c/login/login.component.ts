import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  @ViewChild('loginForm') loginForm: NgForm;

  login(formValue) {
    console.log(formValue);
    this.router.navigateByUrl('/');

    // this.auth.login(formValue).subscribe((res: ApiResponse) => {
    //   if (res.res) {
    //     this.auth.setJWT(res.token);
    //     this.auth.setCurrentUser(res.return);
    //     this.router.navigateByUrl('/');
    //   } else {
    //     /*
    //     Natürlich geht das nicht mit einem dynamische System nicht. Grund: mat-error triggert nur, wenn
    //     der control zum mat-error invalid ist nicht, jedoch nicht wenn die Form invalid.
    //     this.loginForm.form.setErrors({
    //       [res.error]: true
    //     });
    //     */
    //     this.loginForm.form.controls[
    //       res.error === 'wrong password' ? 'password' : 'email'
    //     ].setErrors({
    //       [res.error]: true,
    //     });
    //   }
    // });
  }
}
