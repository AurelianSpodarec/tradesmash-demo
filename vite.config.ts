import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
          "@": path.resolve(path.__dirname, "./src/"),
          routes: `${path.resolve(path.__dirname, "./src/routes/")}`,
          database: `${path.resolve(path.__dirname, "./src/database/")}`,
          interface: `${path.resolve(path.__dirname, "./src/interface/")}`,
          config: `${path.resolve(path.__dirname, "./src/config/")}`,
      }
  }
});