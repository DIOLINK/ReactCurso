import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba de GifExpertApp', () => {
  const wrapper = shallow(<GifExpertApp />);
  it('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Samurai X'];
    const wrapper = shallow(<GifExpertApp categoriesDefault={categories} />);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
