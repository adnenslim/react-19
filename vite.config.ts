import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { PluginOption, defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), tailwindcss()] as PluginOption[],
});
