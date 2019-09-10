import { Component, OnInit, Input } from '@angular/core';
import { Articel } from 'src/app/_interface/articel';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_service/auth.service';
import { User } from 'src/app/_interface/user';
import { GetUiDataService } from 'src/app/_service/get-ui-data.service';

@Component({
  selector: 'mors-articel',
  templateUrl: './articel.component.html',
  styleUrls: ['./articel.component.scss']
})
export class ArticelComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private getUiData: GetUiDataService
  ) {
    this.user = this.auth.getUser();
  }

  articel: Articel = {} as Articel;
  @Input() new = false;
  @Input() image?;
  user: User;

  ngOnInit() {
    if (!this.new) {
      this.getUiData.getArticelAll().subscribe();
      this.route.params.subscribe(params => {
        const articel = params.projekt.replace(/-/g, ' ');

        try {
          this.getUiData.getArticel(articel).subscribe(res => {
            if (res !== undefined) {
              this.articel = res;
            }
          });
        } catch (e) {
          console.log(e);
        }
      });
    } else {
      // console.log(this.image);
      console.log('nix');
    }
  }

  upload(text: string, title: string) {
    const articel: Articel = {
      title,
      text,
      autor: this.user.firstName + ' ' + this.user.name,
      image: this.image
    };
    this.getUiData.setArticel(articel).subscribe(res => {
      console.log(res);
    });
  }
}
