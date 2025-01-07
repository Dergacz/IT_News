import '@testing-library/jest-dom'; 
import 'regenerator-runtime/runtime';
import { TextEncoder, TextDecoder } from 'util';

const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null as ((this: MediaQueryList, ev: MediaQueryListEvent) => void) | null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Assign the mockMatchMedia function to window.matchMedia
window.matchMedia = window.matchMedia || mockMatchMedia;

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
