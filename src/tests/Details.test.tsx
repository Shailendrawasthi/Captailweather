import { shallow } from "enzyme";
import Details from "../Component/Details";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useLocation: () => ({
      location: jest.fn().mockImplementation(() => ({})),
    }),
}));

describe('testing Details component', () => {

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<Details />);
    });

    it('renders  component without crashes', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render a <div />', () => {
        const result = wrapper.find('div').length;
        expect(result).toEqual(1);
    });
    it('should render a <div />', () => {
        const result = wrapper.find('Typography').length;
        expect(result).toEqual(0);
    });

    it('checking Submit button', () => {
        expect(wrapper.text('Capital Weather')).toBeTruthy();
    });
    it('renders snapshot for DetailsInfo component', () => {
        expect(wrapper).toMatchSnapshot();
    });
})

