import '@testing-library/jest-dom'; 
import 'regenerator-runtime/runtime';

const mockMatchMedia = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});

window.matchMedia = window.matchMedia || mockMatchMedia;

// Add TextEncoder/TextDecoder polyfill
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
