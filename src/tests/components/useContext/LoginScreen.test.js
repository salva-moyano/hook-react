import React from "react";
import { shallow, mount } from 'enzyme';
import {LoginScreen} from "../../../components/useContext/LoginScreen";
import {UserContext} from "../../../components/useContext/UserContext";

describe('Testing <LoginScreen', () => {
    let wrapper;
    const setUser = jest.fn()
    beforeEach(() => {

        wrapper = mount(<UserContext.Provider value = {{
           setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>)
    })


    test('should show successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call setUser with expected arguments ', () => {
        wrapper.find('button').simulate('click');

        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser).toHaveBeenCalledWith({
            id: expect.any(Number),
            name: 'salva'
        })
    })



})