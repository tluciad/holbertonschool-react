import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()});

describe("Testing Login", () => {
    const wrapper = shallow(<Login />);

  it("should render without crashing", () => {
    shallow(<Login shouldRender/>);
  });
 
  it("<Login /> render 2 inputs", () => {
		expect(wrapper.find('input')).to.have.lengthOf(2);
	});

	it("<Login /> render 2 labels", () => {
		expect(wrapper.find('label')).to.have.lengthOf(2);
	});
});