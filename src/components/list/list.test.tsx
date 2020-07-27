import { mount, shallow } from 'enzyme';
import React from 'react';

import { ListItem, OL, UL } from './index';

const defaultTextColors = 'text-gray-800 dark:text-gray-300';
const items = ['Item A', 'Item B'];

describe('OL Component', () => {
  it('should render an ol tag', () => {
    const wrapper = shallow(<OL items={items} />);
    expect(wrapper.find('ol')).toHaveLength(1);
  });

  it('should display provided props.items', () => {
    const wrapper = mount(<OL items={items} />);
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('li').at(0).text()).toBe('Item A');
    expect(wrapper.find('li').at(1).text()).toBe('Item B');
  });

  it('should use provided props.className', () => {
    const wrapper = shallow(<OL items={items} className="block" />);
    expect(wrapper.hasClass('block'));
  });
});

describe('UL Component', () => {
  it('should render an ul tag', () => {
    const wrapper = shallow(<UL items={items} />);
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should display provided props.items', () => {
    const wrapper = mount(<UL items={items} />);
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('li').at(0).text()).toBe('Item A');
    expect(wrapper.find('li').at(1).text()).toBe('Item B');
  });

  it('should use provided props.className', () => {
    const wrapper = shallow(<UL items={items} className="block" />);
    expect(wrapper.hasClass('block'));
  });
});

describe('ListItem', () => {
  it('should render an li tag', () => {
    const wrapper = shallow(<ListItem>lorem</ListItem>);
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('should render provided props.children', () => {
    const wrapper = shallow(<ListItem>lorem</ListItem>);
    expect(wrapper.text()).toBe('lorem');
  });

  it('should use provided props.className', () => {
    const wrapper = shallow(<ListItem className="block">lorem</ListItem>);
    expect(wrapper.hasClass('block')).toBe(true);
  });

  it('should use default text color if props.className has no color', () => {
    const wrapper = shallow(<ListItem className="block">lorem</ListItem>);
    expect(wrapper.hasClass(defaultTextColors)).toBe(true);
  });

  it('should ignore default text color if props.className has color', () => {
    const wrapper = shallow(<ListItem className="text-black">lorem</ListItem>);
    expect(wrapper.hasClass(defaultTextColors)).toBe(false);
    expect(wrapper.hasClass('text-black')).toBe(true);
  });
});
