import { getGifs } from '../../helpers/getGifs';

describe('Probando getGifs.js', () => {
  test('Debe de traer 10 elementos', async () => {
    const category = 'One Punch';
    const gifs = await getGifs(category);
    expect(gifs.length).toBe(10);
  });
  it('Si no tiene Category', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
