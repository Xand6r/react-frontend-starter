//define the base variables for the dapp
const colors = {
  white: 'white',
  grey: 'rgba(244, 244, 244, 1)',
  coal: 'rgba(33, 33, 33, 1)',
  dullBlack: 'rgba(144, 144, 144, 1)',
  silver: '#E0E0E0',
  dullGrey: '#F4F4F4',
  darkGrey: 'rgba(211, 211, 211, 1)',
  lightGrey: 'rgba(229, 229, 229, 1)',
};

const breakpoints = {
  mobile: '800px',
  tab: '1200px',
  max: '2000px',
};

const fonts = {
  primaryFont: 'Poppins-Regular',
  secondaryFont: 'Cabinet Grotesk',
  primaryFontLight: 'Poppins-Light',
  primaryFontRegular: 'Poppins-Regular',
  primaryFontMedium: 'Poppins-Medium',
  primaryFontSemibold: 'Poppins-SemiBold',
  primaryFontBold: 'Poppins-Bold',
};

const meta = {
  fastTransitionSpeed: '300ms',
  axisWidth: '64.1875rem',
};

export const devices = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
};

const theme = {
  colors,
  breakpoints,
  fonts,
  meta,
  devices,
};
export default theme;
