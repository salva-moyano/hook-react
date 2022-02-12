import {act, renderHook} from "@testing-library/react-hooks";
import {useFetch} from "../../hooks/useFetch";

describe('Testing useFetch',() => {

    test("should return default information", () => {

        const { result } = renderHook(() => useFetch("https://reqres.in/api/users?page=2"))

        const {data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBeTruthy();
        expect( error ).toBe(null);
    })

    test("should retrieve information", async () => {
        const { result, waitForNextUpdate} = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"))

        await waitForNextUpdate()

        const {data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    })

    test("should error retrieve information", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch("https://reqres.in/api1212/users?page=2"))

        await waitForNextUpdate();

        const {data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe("No se pudo cargar la info");

    });
})