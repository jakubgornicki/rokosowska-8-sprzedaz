import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // We serve images from DO Spaces and use static export; next/image
      // optimizer is not applicable, so plain <img> is intentional.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
