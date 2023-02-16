/**
 * @fileoverview
 *
 * This file ensures that ReadableStream is available in the global scope. It is
 * supported out of the box on Node >18 only.
 */

import { ReadableStream } from "web-streams-polyfill";

if (!globalThis.ReadableStream) {
  Object.assign(globalThis, { ReadableStream });
}

export {};