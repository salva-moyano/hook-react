import {act, renderHook} from "@testing-library/react-hooks";
import {useForm} from "../../hooks/useForm";

describe('Testing useForm', () => {

    const initialForm = {
        name: 'Salva',
        email: 'salva@gmail.com'
    };

    test('should return a form by default', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof  handleInputChange).toBe('function');
        expect(typeof  reset).toBe('function')
    });


    test('should return a form by default empty form', () => {

        const { result } = renderHook(() => useForm({}));

        const [formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual({});
        expect(typeof  handleInputChange).toBe('function');
        expect(typeof  reset).toBe('function')
    });

    test('should change name the value form', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [ , handleInputChange ] = result.current;

        act(() => {
            const target = {
                name: "name",
                value: "pepe"
            }
            handleInputChange({ target });
        })
        const [ formValues ] = result.current;
        expect(formValues).not.toEqual(initialForm);

    });

    test('should reset form', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            const target = {
                name: "name",
                value: "pepe"
            }
            handleInputChange({ target });
            reset();
        })
        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialForm);
    })


})