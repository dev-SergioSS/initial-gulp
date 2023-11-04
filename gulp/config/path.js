import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './dist'
const srcFolder = './src'
const zipFolder = './zip'

export const path = {
  src: {
    files: `${srcFolder}/libs/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/*.scss`,
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/`,
  },
  watch: {
    files: `${srcFolder}/libs/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/{scss,components}/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  build: {
    files: `${buildFolder}/libs/`,
    html: `${buildFolder}/`,
    scss: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  zip: zipFolder,
  ftp: ``,
}
