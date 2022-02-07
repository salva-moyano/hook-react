import {act, renderHook} from "@testing-library/react-hooks";
import {useCounter} from "../../hooks/useCounter";


describe("Testing useCounter", () => {

    test("should values by defaults", () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    });

    test("should have a counter with the value 100", () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test("should increment counter in 1 ", () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => { increment() })

        const { counter } = result.current
        expect(counter).toBe(11);
    })

    test("should decrement counter in 1 ", () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => { decrement() })

        const { counter } = result.current
        expect(counter).toBe(9);
    })

    test("should reset the counter value to 10 ", () => {
        const { result } = renderHook(() => useCounter());
        const { increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        });

        const { counter } = result.current
        expect(counter).toBe(10);
    })

})