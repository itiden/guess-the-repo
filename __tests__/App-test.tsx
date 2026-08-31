/**
 * @format
 */

import React from 'react';
import App from '../src/App';
import { render } from '@testing-library/react-native';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

it('renders correctly', async () => {
  await render(<App />);
});
