import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('Probando GifGrid.js', () => {
  const category = 'One Punch';
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });
  const wrapper = shallow(<GifGrid category={category} />);
  it('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Debe de tener un h3 con la categoria', () => {
    expect(wrapper.find('h3').text().trim()).toBe(category);
  });
  it('Debe de tener un parrafo con la categoria', () => {
    expect(wrapper.find('p').text().trim()).toBe('Loading...');
  });
  it('Debe tener la data', () => {
    const gifs = [
      { id: 'ABC', url: 'https://google.com', title: 'Cualquier cosa' },
      { id: '123', url: 'https://google.com', title: 'Cualquier cosa Ro' },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
