import { mount, shallow } from 'enzyme';
import React from 'react';

import ThemeSwitch from './themeSwitch';

describe('ThemeSwitch Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ThemeSwitch />);
    expect(wrapper).toMatchSnapshot();
  });

  // TODO test trigger
  // it('should trigger toggleDarkMode onChange', () => {
  //   const wrapper = mount(<ThemeSwitch />);
  //   const mockFn = jest.fn();

  //   wrapper.find('input').simulate('change');
  // });
});
