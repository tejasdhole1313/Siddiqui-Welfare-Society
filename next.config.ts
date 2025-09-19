import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence workspace root inference warning by explicitly setting the monorepo root
  // This points one level up from the app directory (D:\Moksha\Ecommerce-1)
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
