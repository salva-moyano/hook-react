import React from "react";
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import { RealExampleRef } from "../../../components/useRef/RealExampleRef";


describe('Testing <RealExample', () => {

    test('should show successfully', () => {
        const wrapper = shallow(<RealExampleRef />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('should show component MultipleCustomHook', () => {
        const wrapper = shallow(<RealExampleRef />)

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();

    })
})