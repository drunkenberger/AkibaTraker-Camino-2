
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  server: {
    host: '0.0.0.0',
    hmr: { host: '0.0.0.0' },
    watch: { usePolling: true },
    allowedHosts: [
      '*.worf.replit.dev',
      '6e89015e-80d3-493d-9637-534d612a9631-00-1qgovcyd0rqqg.worf.replit.dev',
      'akiba-test-b-drunkenberger.replit.app'
    ]
  },
  resolve: {
    alias: {
      "@db": path.resolve(__dirname, "db"),
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
