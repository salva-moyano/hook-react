import React from "react";
import { shallow, mount } from 'enzyme';
import {HomeScreen} from "../../../components/useContext/HomeScreen";
import {UserContext} from "../../../components/useContext/UserContext";

describe('Testing <HomeScreen', () => {

    test('should show successfully', () => {

        const user = {
            name: 'salva',
            email: 'salva@gmail,com'
        }

        const wrapper = mount(<UserContext.Provider value = {{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>)

        expect(wrapper).toMatchSnapshot();
    })

})