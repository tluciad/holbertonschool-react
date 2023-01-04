import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Testing Footer", () => {
    const wrapper = shallow(<Footer />);

  it("should render without crashing", () => {
    shallow(<Footer />);
}); 
  it("should render a div with the class Footer", () => {
    expect(wrapper.find('Footer.Footer')).toHaveLength(1);
  });
});