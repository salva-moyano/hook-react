import React from "react";
import {mount} from 'enzyme';
import {AppRouter} from "../../../components/useContext/AppRouter";
import {UserContext} from "../../../components/useContext/UserContext";

describe('Testing in <AppRouter', () => {

    const user = {
        name: 'salva',
        email: 'salva@gmail,com'
    }

    const wrapper = mount(<UserContext.Provider value = {{ user }}>
        <AppRouter/>
    </UserContext.Provider>)

    test('should show successfully', () => {
        expect(wrapper).toMatchSnapshot()
    })
})