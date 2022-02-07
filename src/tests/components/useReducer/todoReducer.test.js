import {todoReducer} from "../../../components/useReducer/todoReducer";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Testing in todoReducer', () => {

    test("should return default state", () => {
        const state = todoReducer( demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('should add todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Learn MySql',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state[2]).toEqual(newTodo);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('should delete todo', () => {
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });

    test('should change toggle TODO', () => {
        const action = {
            type: 'toggle',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state).not.toEqual(demoTodos);
        expect(state[0].done).toBe(false);
        expect(state[1].done).toBeTruthy();
    })

});