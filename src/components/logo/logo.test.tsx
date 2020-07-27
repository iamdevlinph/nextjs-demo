import { shallow } from 'enzyme';
import React from 'react';

import { Logo } from './index';

describe('Logo Component', () => {
  it('should match logo snapshot if no props provided', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match logo snapshot if props.isSquare', () => {
    const wrapper = shallow(<Logo isSquare />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match logo snapshot if props.isSquare={false}', () => {
    const wrapper = shallow(<Logo isSquare={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match logo snapshot if props.className', () => {
    const wrapper = shallow(<Logo className="block" />);
    expect(wrapper).toMatchSnapshot();
  });
});
