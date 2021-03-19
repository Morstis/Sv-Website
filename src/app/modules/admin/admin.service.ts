import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NachhilfeUser } from '../nachhilfe/i/nachhilfe-user';
import { NachhilfeService } from '../nachhilfe/s/nachhilfe.service';
import { GenericService } from '../shared/classes/generic-service';
import { LoaderService } from '../shared/s/loader.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends GenericService<{}> {
  constructor(
    protected db: AngularFirestore,
    protected snackBar: MatSnackBar,
    private fireFunction: AngularFireFunctions,
    private loaderService: LoaderService,
    private nachhilfeService: NachhilfeService
  ) {
    super(db, snackBar, { dbRef: 'modules/admin', collRef: 'klassen' });
  }

  uploadKlassenFromHTML(html: string) {
    this.fireFunction
      .httpsCallable('getKlassenFromUpload')(html)
      .pipe(map((klasse) => Object.keys(klasse)))
      .subscribe((x) => {
        this.uploadKlassen(x);
      });
  }

  async uploadKlassen(klassen: string[]): Promise<void> {
    try {
      await this.dbRef.set({
        klassen,
      });
    } catch (err) {
      this.handleError(
        err,
        'Es ist ein unerwarteter Fehler beim Hochladen aufgetreten!'
      );
    }
    this.success('Hochgeladen!');
  }

  async setFaecher(faecher: string[]) {
    try {
      await this.nachhilfeService.setFaecher(faecher);
    } catch (err) {
      this.handleError(
        err,
        'Es ist ein unerwarteter Fehler beim Hochladen aufgetreten!'
      );
    }
    this.success('Hochgeladen!');
  }
}
