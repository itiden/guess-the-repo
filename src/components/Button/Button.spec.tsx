// Hello.spec.js
import React from 'react';
import {render} from 'react-native-testing-library';
import {Button} from './Button';

describe('Button', () => {
  it('renders correct', () => {
    const {queryByText} = render(<Button label="Button" onPress={() => {}} />);
    expect(queryByText('Button')).not.toBeNull();
  });
});
