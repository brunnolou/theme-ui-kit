import * as React from 'react';
import globalStyles from '../../materials/global';
import { Global } from '@emotion/core';
import { ThemeProvider as TUIThemeProvider } from 'theme-ui';

import theme from '../../materials/theme';

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <TUIThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </TUIThemeProvider>
  );
};

export default ThemeProvider;
