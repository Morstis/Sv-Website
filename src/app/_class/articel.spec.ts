import { Articel } from './articel';

describe('Articel', () => {
  it('should create an instance', () => {
    expect(new Articel('', '', '', '')).toBeTruthy();
  });
});
