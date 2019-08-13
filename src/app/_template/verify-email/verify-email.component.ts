import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_service/auth.service';
import { ApiResponse } from 'src/app/_interface/api-response';
import { VerifyMessage } from 'src/app/_interface/verify-message';

@Component({
  selector: 'mors-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  subscription: Subscription;
  id: number;
  uid: string;
  message: VerifyMessage = {} as VerifyMessage;

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      (this.id = params.id), (this.uid = params.uid);
    });

    this.auth.verify(this.id, this.uid).subscribe(response => {
      const res: ApiResponse = response;
      if (res.res === false) {
        console.log('%c' + res.error, 'color: red');

        this.message.head =
          'Etwas ist schief gelaufen! Bitte versuche folgendes';

        this.message.error = res.error;
      }
      if (res.res === true) {
        this.message.head = 'Du wurdes erfolgreich verifiziert.';
        this.auth.setJWT(res.token);
      }
    });
  }

  OnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
