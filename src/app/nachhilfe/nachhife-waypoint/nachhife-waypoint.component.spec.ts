import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhifeWaypointComponent } from './nachhife-waypoint.component';

describe('NachhifeWaypointComponent', () => {
  let component: NachhifeWaypointComponent;
  let fixture: ComponentFixture<NachhifeWaypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NachhifeWaypointComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhifeWaypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
