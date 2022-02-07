import React from "react";
import {shallow} from "enzyme";
import {HookApp} from "../HookApp";

describe("Testint <HookApp", () => {

    test('should make snapshot', () => {
        const wrapper =  shallow(<HookApp/>)

        expect(wrapper).toMatchSnapshot()

    });
})