import {shallow} from "enzyme";
import {TodoList} from "../../../components/useReducer/TodoList";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Testing <TodoList', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<TodoList todos={ demoTodos}  handleToggle={handleToggle} handleDelete={handleDelete} />)

    test('should show successfully', () =>  {

        expect(wrapper).toMatchSnapshot();

    })

    test('should have a two <TodoListItem', () => {

        const todos = wrapper.find('TodoListItem');

        expect(todos.length).toBe(2)
        expect(todos.at(0).prop('handleDelete')).toEqual(expect.any(Function));

    })

})