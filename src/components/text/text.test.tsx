import { shallow } from 'enzyme';
import React from 'react';

import { Text } from './text';

const defaultTextColors = 'text-gray-800 dark:text-gray-300';
const h1Class = 'text-6xl';
const h2Class = 'text-5xl';
const h3Class = 'text-4xl';
const h4Class = 'text-3xl';
const h5Class = 'text-2xl';
const h6Class = 'text-xl';

describe('Text Component', () => {
  it('should use provided props.className', () => {
    const wrapper = shallow(<Text className="block mx-1">lorem</Text>);
    expect(wrapper.hasClass('block mx-1')).toBe(true);
  });

  it('should use default text color if props.className has no color', () => {
    const wrapper = shallow(<Text>lorem</Text>);
    expect(wrapper.hasClass(defaultTextColors)).toBe(true);
  });

  it('should ignore default text color if props.className has color', () => {
    const wrapper = shallow(<Text className="text-black">lorem</Text>);
    expect(wrapper.hasClass(defaultTextColors)).toBe(false);
    expect(wrapper.hasClass('text-black')).toBe(true);
  });

  it('should render p tag if no props.as provided', () => {
    const wrapper = shallow(<Text>lorem</Text>);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should render p tag if props.as="p"', () => {
    const wrapper = shallow(<Text as="p">lorem</Text>);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should render small tag if props.as="small"', () => {
    const wrapper = shallow(<Text as="small">lorem</Text>);
    expect(wrapper.find('small')).toHaveLength(1);
  });

  it('should render span tag if props.as="span"', () => {
    const wrapper = shallow(<Text as="span">lorem</Text>);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it(`should render h1 tag if props.as="h1" and have class ${h1Class}`, () => {
    const wrapper = shallow(<Text as="h1">lorem</Text>);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').hasClass(h1Class)).toBe(true);
  });

  it(`should render h2 tag if props.as="h2" and have class ${h2Class}`, () => {
    const wrapper = shallow(<Text as="h2">lorem</Text>);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').hasClass(h2Class)).toBe(true);
  });

  it(`should render h3 tag if props.as="h3" and have class ${h3Class}`, () => {
    const wrapper = shallow(<Text as="h3">lorem</Text>);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h3').hasClass(h3Class)).toBe(true);
  });

  it(`should render h4 tag if props.as="h4" and have class ${h4Class}`, () => {
    const wrapper = shallow(<Text as="h4">lorem</Text>);
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').hasClass(h4Class)).toBe(true);
  });

  it(`should render h5 tag if props.as="h5" and have class ${h5Class}`, () => {
    const wrapper = shallow(<Text as="h5">lorem</Text>);
    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.find('h5').hasClass(h5Class)).toBe(true);
  });

  it(`should render h6 tag if props.as="h6" and have class ${h6Class}`, () => {
    const wrapper = shallow(<Text as="h6">lorem</Text>);
    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.find('h6').hasClass(h6Class)).toBe(true);
  });

  it('should ignore header tag bold if props.bold="false"', () => {
    const wrapper = shallow(
      <Text as="h1" bold={false}>
        lorem
      </Text>
    );
    expect(wrapper.find('h1').hasClass('font-bold')).toBe(false);
  });

  it('should render text as bold if props.bold="true"', () => {
    const wrapper = shallow(<Text bold>lorem</Text>);
    expect(wrapper.hasClass('font-bold')).toBe(true);
  });

  it('should render provided props.children', () => {
    const wrapper = shallow(<Text>lorem</Text>);
    expect(wrapper.text()).toBe('lorem');
  });
});
