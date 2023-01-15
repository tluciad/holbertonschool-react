import React from 'react';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

configure({adapter: new Adapter()});

describe("Testing App", () => {
    const wrapper = shallow(<App />);

    it("<App /> is rendered without crashing", () => {
        expect(wrapper).to.not.be.an('undefined');
    });
    
    it("<App /> contains the <Notifications /> Component", () => {
        expect(wrapper.contains(<Notifications />)).to.equal(true);
    });

    it("<App /> contains the <Header /> Component", () => {
        expect(wrapper.contains(<Header />)).to.equal(true);
    });

    it("<App /> contains the <Login /> Component", () => {
        expect(wrapper.contains(<Login />)).to.equal(true);
    });

    it("<App /> contains the <Footer /> Component", () => {
        expect(wrapper.contains(<Footer />)).to.equal(true);
    });
});
