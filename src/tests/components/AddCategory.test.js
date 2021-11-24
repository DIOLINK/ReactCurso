import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Probando AddCategory.js', () => {
  const setCategories = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('Debe renderizar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de cambiar la caja de texto', () => {
    const value = 'Hola Roger';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    expect(wrapper.find('input').prop('value')).toBe(value);
  });
  test('No debe postear nada', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('Debe de llamar el setCategories y limpiar el input', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Holaaaa' } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    // expect(setCategories).toHaveBeenCalledTimes(2);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toEqual('');
  });
});
