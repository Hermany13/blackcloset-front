import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      text: {
        white: string;
        whiteLight: string;
      }
    };

    fonts: {
      roboto: string,
      quicksand: string
    },

    sizes: {
      baseWidth: string;
      baseWidthMobile: string;
    };
  }
}
