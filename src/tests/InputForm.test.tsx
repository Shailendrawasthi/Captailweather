import { shallow } from "enzyme";
import InputForm from "../Component/InputForm";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => ({
      navigate: jest.fn().mockImplementation(() => ({})),
    }),
}));

describe('testing inputform component', () => {
    
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<InputForm />);
    });

    it('renders snapshot for InputForm component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders non-empty component without crashes', () => {
        expect(wrapper.exists()).toBe(true);
    });
    
    it('should render a <div />', () => {
        const result = wrapper.find('div').length;
        expect(result).toEqual(0);
    });

    it('checking Submit button', () => {
        expect(wrapper.containsMatchingElement('Submit')).toBeTruthy();
    });


    it(' render a <TextField />', () => {
        const result = wrapper.find('#textfield').length;
        expect(result).toEqual(1);
    });
    
});