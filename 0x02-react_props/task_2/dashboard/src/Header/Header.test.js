import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()});


describe("Testing Header", () => {
    const wrapper = shallow(<Header shouldRender/>);

  it("should render without crashing", () => {
    shallow(<Header />);
  });
  
  it("<Header /> render img tag", () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
	});

  it("should render a div with the class Header", () => {
    expect(wrapper.find('div.Header')).to.have.lengthOf(1);
  });
});