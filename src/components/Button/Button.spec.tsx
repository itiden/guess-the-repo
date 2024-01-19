// Hello.spec.js
import { describe, expect, it } from '@jest/globals';
import React from 'react';
import { render } from 'react-native-testing-library';
import { Button } from '.';

describe('Button', () => {
  it('renders correct', () => {
    const { queryByText } = render(
      <Button label="Button" onPress={() => {}} />,
    );
    expect(queryByText('Button')).not.toBeNull();
  });
});
