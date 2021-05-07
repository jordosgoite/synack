import React from 'react';
import { shallow } from 'enzyme';
import Result from '../../components/Result';

describe('test cases for result component - Result.js', () => {
  it('should have 1 `<div>` elements', () => {
    const wrapper = shallow(<Result title="test" descrip="" url="test" />);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should have 1 `<a>` elements', () => {
    const wrapper = shallow(<Result title="test" descrip="" url="test" />);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should have 2 `<span>` elements', () => {
    const wrapper = shallow(<Result title="test" descrip="" url="test" />);
    expect(wrapper.find('span').length).toBe(2);
  });

  it('should have 1 `<p>` elements', () => {
    const wrapper = shallow(<Result title="test" descrip="" url="test" />);
    expect(wrapper.find('p').length).toBe(1);
  });
});
