import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()});

describe("Testing Footer", () => {

  const wrapper = shallow(<Footer />);

  it("should render without crashing", () => {
    shallow(<Footer shouldRender />);
  });
  it("<Footer /> is rendered without crashing", () => {
    expect(wrapper.render()).to.not.be.an('undefined');
  });

  it("<Footer /> renders at least the text: Copyright", () => {
    expect(wrapper.children('p').html()).to.include('Copyright');
  });

});