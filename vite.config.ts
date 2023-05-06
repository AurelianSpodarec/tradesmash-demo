// @ts-nocheck
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
          "@": path.resolve(__dirname, "./src/"),
          routes: `${path.resolve(__dirname, "./src/routes/")}`,
          database: `${path.resolve(__dirname, "./src/database/")}`,
          interface: `${path.resolve(__dirname, "./src/interface/")}`,
          services: `${path.resolve(__dirname, "./src/services/")}`,
          context: `${path.resolve(__dirname, "./src/context/")}`,
          hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
          config: `${path.resolve(__dirname, "./src/config/")}`,
          utils: `${path.resolve(__dirname, "./src/utils/")}`,
          components: `${path.resolve(__dirname, "./src/views/components/")}`,
      }
  },
});