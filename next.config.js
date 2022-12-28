const withInterceptStdout = require("next-intercept-stdout");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = withInterceptStdout(
  {
    i18n,
    reactStrictMode: true,
    swcMinify: true,
  },
  (text) =>
    text.includes("Duplicate atom key") || text.includes("Do not add <script>")
      ? ""
      : text
);
