/// <reference types="vite/client" />

// Declare module for markdown imports
declare module '*.md?raw' {
  const content: string;
  export default content;
}
