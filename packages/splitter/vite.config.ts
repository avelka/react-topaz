// @ts-ignore eslint-disable-next-line
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "react-topaz",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});