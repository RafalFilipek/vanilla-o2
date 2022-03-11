const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPlugins([withImages, withVanillaExtract], nextConfig);
