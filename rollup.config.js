import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import { babel } from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    peerDepsExternal(),
    svgr(),
    resolve(),
    typescript(),
    uglify(),
    babel(),
  ],
};
