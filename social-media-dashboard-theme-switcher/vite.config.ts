import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import getBaseUrl from "../libs/getBaseUrl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBaseUrl(),
});
