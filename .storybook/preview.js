import {addParameters} from '@storybook/client-api';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import '../src/styles/index.scss';
import './storybook.demo.scss';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});