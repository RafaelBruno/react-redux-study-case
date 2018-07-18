import React from 'react';
import { shallow } from 'enzyme';

import FormPage from '../index';

describe('<FormPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<FormPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<FormPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
