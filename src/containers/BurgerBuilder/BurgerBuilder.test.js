import {BurgerBuilder} from './BurgerBuilder';
import {configure, shallow} from 'enzyme';//shallow renders the component not deeply, like the component but not everything inside it
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
//connecting enzyme
configure({adapter: new Adapter()});

describe('<BurgerBuilder/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
    });

    it('should render <BuildControls/> when recieving ingredients', () => {
       wrapper.setProps({ing: {salad: 0}});
       expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});