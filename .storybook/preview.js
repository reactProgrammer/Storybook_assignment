import React from 'react';
import {addDecorator,addParameters} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from '../src/.jest-test-results';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
addDecorator(withA11y);
addDecorator(withTests({  results,}));
addDecorator(withKnobs);