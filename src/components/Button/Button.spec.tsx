// Hello.spec.js
import React from 'react';
import {render, shallow} from 'react-native-testing-library';
import {Button} from './Button';

describe('Button', () => {
  it('renders correct', () => {
    const {queryByText} = render(<Button label="Button" onPress={() => {}} />);
    expect(queryByText('Button')).not.toBeNull();
  });
  it('should match to snapshot', () => {
    const component = shallow(<Button label="Button" onPress={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
