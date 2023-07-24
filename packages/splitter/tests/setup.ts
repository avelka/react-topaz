import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// @ts-ignore
import matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
