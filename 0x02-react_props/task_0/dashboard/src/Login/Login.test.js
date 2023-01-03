import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe("Testing Login", () => {
    const wrapper = shallow(<Login />);

  it("should render without crashing", () => {
    shallow(<Login />);
  });
 
  it("should render a div with the class Login", () => {
    expect(wrapper.find('div.Login')).toHaveLength(1);
  });  
});