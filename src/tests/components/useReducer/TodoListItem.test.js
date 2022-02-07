import {shallow} from "enzyme";
import { TodoListItem } from "../../../components/useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Testing <TodoListItem', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn()

    const wrapper = shallow(<TodoListItem
        todo={demoTodos[0]} index={0} handleToggle={ handleToggle } handleDelete= {handleDelete}/>);


    test('should show successfully', () => {

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').hasClass('complete')).toBe(false)

    })

    test('should call handle Delete', () => {

        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    })

    test('should call handle Toggle', () => {

        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith(demoTodos[0].id)
    })

    test('should show text successfully', () => {

        expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[0].desc}`);

    })

    test('should have complete class if todo is done', () => {

        const todo  = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem
            todo={todo} index={0} handleToggle={ handleToggle } handleDelete= {handleDelete}/>);

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy()

    })

})