import {configureFonts, DefaultTheme} from 'react-native-paper';
import {Fonts} from 'react-native-paper/lib/typescript/types';

const fontConfig: Fonts = {
  regular: {
    fontFamily: 'SourceSansPro-Bold',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'SourceSansPro-Light',
    fontWeight: 'normal',
  },
};
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: configureFonts({
    android: fontConfig,
    ios: fontConfig,
  }),
  fontSize: {
    h1: 32,
    h2: 24,
    h3: 18,
    h4: 16,
  },
};
