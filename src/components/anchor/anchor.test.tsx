import { shallow } from 'enzyme';
import React from 'react';

import { Anchor } from './index';

describe('Anchor Component', () => {
  it('should match anchor snapshot with only href', () => {
    const wrapper = shallow(<Anchor href="/">lorem</Anchor>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match anchor snapshot if props.block', () => {
    const wrapper = shallow(
      <Anchor href="/" block>
        lorem
      </Anchor>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match anchor snapshot if props.external', () => {
    const wrapper = shallow(
      <Anchor href="/" external>
        lorem
      </Anchor>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match anchor snapshot if props.className', () => {
    const wrapper = shallow(
      <Anchor href="/" className="text-white">
        lorem
      </Anchor>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match anchor snapshot if children is not a string', () => {
    const wrapper = shallow(
      <Anchor href="/" className="text-white">
        <span>Some text</span>
      </Anchor>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match anchor snapshot if props.active', () => {
    const wrapper = shallow(
      <Anchor href="/" active>
        lorem
      </Anchor>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
