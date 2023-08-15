const COLOR_PALETTE = {
  black: '#0d0d0d',
  black1: '#0E0626',
  white: '#FFFFFF',
  cream: '#F6F0E7',
  orange: '#EB5629',
  pink: '#ED74DD',
  pink1: '#F2BFCC',
  yellow: '#F8D66D',
  yellowBg: '#F8D66D',
  blue: '#55BAF1',
}

const FONT_SIZE = {
  small: '12px',
  medium: '14px',
  large: '16px',
}

export default {
  colors: {
    black: COLOR_PALETTE.black,
    black1: COLOR_PALETTE.black1,
    white: COLOR_PALETTE.white,
    cream: COLOR_PALETTE.cream,
    orange: COLOR_PALETTE.orange,
    pink: COLOR_PALETTE.pink,
    pink1: COLOR_PALETTE.pink1,
    yellow: COLOR_PALETTE.yellow,
    yellowBg: COLOR_PALETTE.yellowBg,
    blue: COLOR_PALETTE.blue,
  },
  fonts: {
    primary: 'Work Sans',
    button: 'Teko',
  },
  fontWeight: {
    extrabold: '900',
    bold: '700',
    regular: '400',
    thin: '300',
    black: '900',
  },
  buttonStyles: {
    primary: {
      borderColor: COLOR_PALETTE.orange,
      fillColor: COLOR_PALETTE.orange,
      textColor: 'white',
    },
    secundary: {
      borderColor: COLOR_PALETTE.pink,
      fillColor: COLOR_PALETTE.pink,
      textColor: 'white',
    },
    size: {
      small: {
        fontSize: FONT_SIZE.small,
        padding: '10px 16px',
      },
      medium: {
        fontSize: FONT_SIZE.medium,
        padding: '11px 20px',
      },
      large: {
        fontSize: FONT_SIZE.large,
        padding: '12px 24px',
      },
    },
  },
  spacing: {
    micro: '4px',
    tiny: '8px',
    extraSmall: '16px',
    small: '24px',
    medium: '48px',
    large: '64px',
    extraLarge: '128px',
  },
  borderRadius: {
    default: '3px',
    row: '3px 0 0 3px',
    card: '3px 3px 0 0',
    block: '0 3px 3px 0',
  },
}
