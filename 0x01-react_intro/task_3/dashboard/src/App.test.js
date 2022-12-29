import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("Testing App", () => {
    const wrapper = shallow(<App />);

  it("should render without crashing", () => {
    shallow(<App />);
  });
  it("should render a div with the class App-header", () => {
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });
  it("should render a div with the class App-body", () => {
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });
  it("should render a div with the class App-footer", () => {
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });
});