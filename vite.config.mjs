import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Falls das Repo z.B. "impressum-site" heißt, passe base an: "/impressum-site/"
export default defineConfig({
  plugins: [react()],
  base: "/" // bei Benutzerseite username.github.io: "/" lassen
});
