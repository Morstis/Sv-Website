import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, groupBy, map, mergeMap, toArray } from 'rxjs/operators';

import { GenericService } from '../../shared/classes/generic-service';
import { NachhilfeUser } from '../i/nachhilfe-user';
import { AngularFireFunctions } from '@angular/fire/functions/';
import { LoaderService } from '../../shared/s/loader.service';

@Injectable({
  providedIn: 'root',
})
export class NachhilfeService extends GenericService<NachhilfeUser> {
  constructor(
    protected db: AngularFirestore,
    protected snackBar: MatSnackBar,
    private fireFunction: AngularFireFunctions,
    private loaderService: LoaderService
  ) {
    super(db, snackBar, { dbRef: 'modules/nachhilfe', collRef: 'user' });
  }

  getFaecher(): Observable<string[]> {
    return this.dbRef
      .valueChanges()
      .pipe(map((x: { faecher: string[] }) => x.faecher))
      .pipe(
        catchError((err) =>
          this.handleError(
            err,
            'Es ist ein unerwarteter Fehler beim bekommen der Fächer aufgetreten!'
          )
        )
      );
  }

  // Only for admin usage. Does not display in the UI
  setFaecher(faecher: string[]) {
    return this.dbRef.set({
      faecher,
    });
  }

  getClasses(): Observable<string[]> {
    return this.db
      .doc('/modules/admin')
      .valueChanges()
      .pipe(map((x: { klassen: string[] }) => x.klassen))
      .pipe(
        catchError((err) =>
          this.handleError(
            err,
            'Es ist ein unerwarteter Fehler beim bekommen der Klassen aufgetreten!'
          )
        )
      );
  }

  /*  dynamische Jahrgangerkennung. Das Script holt die Rohdaten von der Api und bearbeitet dann das Observable.
      Referenzen: https://www.learnrxjs.io/
  */
  // getClasses(): Observable<string[]> {
  //   this.loaderService.show();

  //   return this.fireFunction
  //     .httpsCallable('getOnlyKlassen')(null)

  //     .pipe(
  //       mergeMap((x) =>
  //         Object.values(x)

  //           /*  Der Filter wird benötigt um mögliche null returns vom str.match() auszuschließen.
  //             RegEx Referenz: https://regex101.com/
  //             */
  //           .filter(
  //             (y: string) =>
  //               y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi) !== null
  //           )
  //           // Es werden die Buchstaben raussortiert
  //           .map((y: string) => y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi))
  //       ),
  //       // Die Zahlen werden gruppiert
  //       groupBy((x) => x[0]),
  //       map((group) => group.key),
  //       toArray(),
  //       // Zu letzt wird das String Array umgedreht
  //       map((x: string[]) => x.reverse())
  //     )
  //     .pipe(
  //       map((x: string[]) => {
  //         if (x.length < 1) {
  //           throwError(
  //             'Firebase hat ein leeres Array returned. Das ist ein sehr großes Problem! Verständige den Entwickler.'
  //           );
  //         }
  //         return x;
  //       }),
  //       catchError((err) =>
  //         this.handleError(
  //           err,
  //           'Es ist ein unerwarteter Fehler beim holen der Klassen ist aufgetreten!'
  //         )
  //       )
  //     );
  // }
}
