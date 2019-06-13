import { WaypointDiv } from './waypoint-div';

describe('WaypointDiv', () => {
  it('should create an instance', () => {
    expect(
      new WaypointDiv('Umwelt-AG', 'Umwelt AG', 'IMG_7852.JPG')
    ).toBeTruthy();
  });
});
