// Hello.spec.js
import { describe, expect, it } from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from '.';

describe('Button', () => {
  it('renders correct', async () => {
    const { queryByText } = await render(
      <Button label="Button" onPress={() => {}} />,
    );
    expect(queryByText('Button')).not.toBeNull();
  });
});
