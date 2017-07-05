// This is a necessary setup as a trun around
// for test components that uses react-navigation
// because an issue on this lib.
// https://github.com/react-community/react-navigation/issues/256
jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn(),
}));
