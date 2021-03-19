import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NachhilfeService } from '../nachhilfe/s/nachhilfe.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'lw-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})

// Jap sehr hässlich
export class AdminComponent implements OnInit {
  klasse = [];
  klasseI: string;
  faecher = [];
  faecherI: string;

  constructor(
    private adminS: AdminService,
    private nachhilfe: NachhilfeService
  ) {}

  add(klasse: any) {
    this.klasse.push(klasse);
    this.klasseI = '';
  }
  del(index: number) {
    this.klasse = this.klasse.filter((x, i) => i !== index);
  }
  addF(fach: any) {
    this.faecher.push(fach);
    this.faecherI = '';
  }
  delF(index: number) {
    this.faecher = this.faecher.filter((x, i) => i !== index);
  }
  sendHTML(html: string) {
    this.adminS.uploadKlassenFromHTML(html);
    // this.adminS.upload('test');
  }
  sendManuel() {
    this.adminS.uploadKlassen(this.klasse);
  }
  setFaecher() {
    this.adminS.setFaecher(this.faecher);
  }
  ngOnInit(): void {
    this.nachhilfe.getClasses().subscribe((res) => {
      this.klasse = res;
    });
    this.nachhilfe.getFaecher().subscribe((res) => {
      this.faecher = res;
    });
  }
}
