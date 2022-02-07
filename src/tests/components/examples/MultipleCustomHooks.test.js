import {MultipleCustomHooks} from "../../../components/examples/MultipleCustomHooks";
import {shallow} from "enzyme";
import {useFetch} from "../../../hooks/useFetch";
import {useCounter} from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock( "../../../hooks/useCounter");


describe('Testing <MultipleCustomHooks', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {},
            reset: () => {}
        })

    });

    test('should show success ', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show information', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Salva',
                quote: 'Hola React'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect( wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('.mb-5').text().trim()).toBe('Hola React');
        expect( wrapper.find('footer').text().trim()).toBe('Salva');
    })
})