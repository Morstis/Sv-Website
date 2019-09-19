import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhifeInfoComponent } from './nachhife-info.component';

describe('NachhifeInfoComponent', () => {
  let component: NachhifeInfoComponent;
  let fixture: ComponentFixture<NachhifeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhifeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhifeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
