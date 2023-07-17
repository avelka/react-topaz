// vite.config.ts
import { defineConfig } from "file:///Users/antoine/dev/perso/react-topaz/node_modules/.pnpm/vite@4.4.1_@types+node@17.0.45/node_modules/vite/dist/node/index.js";
import react from "file:///Users/antoine/dev/perso/react-topaz/node_modules/.pnpm/@vitejs+plugin-react-swc@3.3.2_vite@4.4.1/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import cssInjectedByJsPlugin from "file:///Users/antoine/dev/perso/react-topaz/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.2.0_vite@4.4.1/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import dts from "file:///Users/antoine/dev/perso/react-topaz/node_modules/.pnpm/vite-plugin-dts@3.2.0_@types+node@17.0.45_typescript@5.1.6/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/antoine/dev/perso/react-topaz/packages/splitter";
var vite_config_default = defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(), dts()],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
      name: "react-topaze",
      fileName: (format) => `react-topaz.splitter.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW50b2luZS9kZXYvcGVyc28vcmVhY3QtdG9wYXovcGFja2FnZXMvc3BsaXR0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hbnRvaW5lL2Rldi9wZXJzby9yZWFjdC10b3Bhei9wYWNrYWdlcy9zcGxpdHRlci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYW50b2luZS9kZXYvcGVyc28vcmVhY3QtdG9wYXovcGFja2FnZXMvc3BsaXR0ZXIvdml0ZS5jb25maWcudHNcIjsvLyBAdHMtaWdub3JlIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKCksIGR0cygpXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImluZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJyZWFjdC10b3BhemVcIixcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgcmVhY3QtdG9wYXouc3BsaXR0ZXIuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sU0FBUztBQUxoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQztBQUFBLEVBQ2pELE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUN6QyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyx3QkFBd0IsTUFBTTtBQUFBLElBQ3REO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
