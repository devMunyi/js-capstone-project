import { commentCounters } from '../modules/comments.js';


describe('Get the Comment Count', () => {
  it('Your Comments count is', () => {
    expect(
      commentCounters([
        {username: 'Muhmmd Usama',comment: 'This is nice!',creation_date: '2022-10-20'},
        {username: 'Sam',comment: 'Great content!',creation_date: '2022-10-20'},
        {username: 'Usama',comment: 'Amazing content!',creation_date: '2022-10-20'}])).toBe(3);
  });

  it('Your Comments count is', () => {
    expect(
      commentCounters([
        {username: 'Muhmmd Usama',comment: 'This is nice!',creation_date: '2022-10-20'},
        {username: 'Sam',comment: 'Great content!',creation_date: '2022-10-20'}])).toBe(2);
  });

  it('Your Comments count is Zero ( 0 )', () => {
    expect(
      commentCounters([])).toBe(0);
  });

});
