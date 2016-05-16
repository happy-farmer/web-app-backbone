({
  appDir: '../build',
  baseUrl: 'scripts',
  mainConfigFile: '../build/scripts/require-config.js',
  dir: '../deploy',
  optimize: 'uglify2',
  uglify2: {
    compress: {
      drop_console: true
    }
  },
  skipDirOptimize: true,
  optimizeCss: 'standard',
  pragmas: {
    build: true
  },
  findNestedDependencies: false, // warning, do not change
  removeCombined: true,
  modules: [
    {
      name: 'bootstrap',
      include: ['app', 'main']
    },
    {
      name: 'pages/index/controller',
      exclude: ['bootstrap']
    },
    {
      name: 'pages/markets/controller',
      exclude: ['bootstrap']
    },
    {
      name: 'pages/markets/controllerAdd',
      exclude: ['bootstrap']
    },
    {
      name: 'pages/markets/controllerEdit',
      exclude: ['bootstrap']
    },
    {
      name: 'pages/markets/controllerDelete',
      exclude: ['bootstrap']
    }
  ],
  fileExclusionRegExp: /^\.|LICENSE|\.(coffee|gemspec|less|map|md|nuspec|rb|scss|txt|yml|hbs)$/,
  preserveLicenseComments: false
})
