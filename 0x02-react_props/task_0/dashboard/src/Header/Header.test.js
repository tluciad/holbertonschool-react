import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Testing Header", () => {
    const wrapper = shallow(<Header />);

  it("should render without crashing", () => {
    shallow(<Header />);
  });
  it("should render a div with the class Header", () => {
    expect(wrapper.find('div.Header')).toHaveLength(1);
  });
});