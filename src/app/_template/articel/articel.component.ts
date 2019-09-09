import { Component, OnInit, Input } from '@angular/core';
import { Articel } from 'src/app/_interface/articel';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mors-articel',
  templateUrl: './articel.component.html',
  styleUrls: ['./articel.component.scss']
})
export class ArticelComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  articel$: Observable<Articel> = {} as Observable<Articel>;
  @Input() new = false;
  @Input() image?;

  ngOnInit() {
    if (!this.new) {
      this.route.params.subscribe(params => {
        const projekt = params.projekt;
        // this.articel$;
      });
    } else {
      console.log(this.image);
    }
  }
}
