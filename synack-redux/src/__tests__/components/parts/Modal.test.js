import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../components/parts/Modal';

describe('test cases for modal component - Modal.js', ()=>{
    it('should have 2 `<div>` elements', () => {
        const wrapper = shallow(<Modal />);
        expect(wrapper.find('div').length).toBe(2);
    });

    it('should display this message: Please enter your query and select a search engine!', () => {
        const wrapper = shallow(<Modal />);
        const input = wrapper.find('h2').text()
        console.log(input)
        expect(wrapper.find('h2').text().includes('Please enter your query and select a search engine!')).toBe(true);
    });

    it('should display a close button', () => {
        const wrapper = shallow(<Modal />);
        const input = wrapper.find('button')
        expect(input.length).toBe(1);
        expect(input.text().includes('Close')).toBe(true);
    });
});