import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe("Testing App", () => {
    const wrapper = shallow(<App />);

  it("should render without crashing", () => {
    shallow(<App />);
  });
  it("should render a div with the class App-header", () => {
    expect(wrapper.find('.App-header').exists).toEqual(true);
  });
  it("should render a div with the class App-body", () => {
    expect(wrapper.find('.App-body').exists).toEqual(true);
  });
  it("should render a div with the class App-footer", () => {
    expect(wrapper.find('.App-footer').exists).toEqual(true);
  });
});