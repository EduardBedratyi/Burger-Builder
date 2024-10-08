import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavigationItems } from './NavigationItems';
import { NavigationItem } from './NavigationItem/NavigationItem';
 
configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    //Results of describe is in the Test Suits
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });
    //Results of it are in the Tests

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        //wrapper = shallow(<NavigationItems isAuthenticatedUser />);
        wrapper.setProps({isAuthenticatedUser: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should en exact logout button', () => {
        wrapper.setProps({isAuthenticatedUser: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});
