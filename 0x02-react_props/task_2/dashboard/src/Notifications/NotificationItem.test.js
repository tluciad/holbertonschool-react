/* eslint-disable react/no-danger-with-children */
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';
import Adapter from '@cfaester/enzyme-adapter-react-18';


configure({adapter: new Adapter()});

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<NotificationItem shouldRender />);
      console.log(wrapper);
	expect(wrapper).to.not.be.an("undefined");
    });
  
    it("<NotificationItem /> render the correct HTML, by passing type and value props", () => {

		const props = {type: "default",	value: "New resume", html: undefined}		
		const component = shallow(<NotificationItem {...props} />);

		console.log(component);
		expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}>New resume</li>)).to.equal(true);
	}); 
    
    it("Passing a dummy html prop, it renders the correct html (for example", () => {
        const text = "Here is the list of notifications";
        const wrapper = shallow(
          <NotificationItem html={{ __html: "<u>test</u>" }} />
        );
        wrapper.update();
        const listItem = wrapper.find("li");
        expect(listItem.html()).to.equal("<li><u>test</u></li>");
      });
  
  });