import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Prueba de GifGridItem.js', () => {
  const wrapper = shallow(
    <GifGridItem
      title="Title"
      url="https://giphy.com/gifs/studiosoriginals-wednesday-happy-morning-Cm9wKmKMUlRPvdoHgU"
    />
  );
  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe('Title');
  });
  it('Img debe tener los prosp correctos', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(
      'https://giphy.com/gifs/studiosoriginals-wednesday-happy-morning-Cm9wKmKMUlRPvdoHgU'
    );
    expect(img.prop('alt')).toBe('Title');
  });
  test('Debe de tener un div con la clase "animate__animated animate__bounce"', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__animated animate__bounce')).toBe(true);
  });
});
