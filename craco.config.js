const { WebOSMetaPlugin, GracefulFsPlugin, ILibPlugin } = require('@enact/dev-utils');

module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        const existingPlugins = postcssLoaderOptions.postcssOptions?.plugins || [];
        const sanitizedExistingPlugins = existingPlugins.filter((plugin) => plugin !== true && plugin !== false && plugin != null);
        postcssLoaderOptions.postcssOptions = {
          ...postcssLoaderOptions.postcssOptions,
          plugins: [...sanitizedExistingPlugins, ...(process.env.PROCESS_CSS_VARIABLES === 'true' ? ['postcss-css-variables'] : [])].filter(
            (plugin) => plugin !== true && plugin !== false && plugin != null,
          ),
        };
        return postcssLoaderOptions;
      },
    },
  },
  webpack: {
    /**
     * @type import("webpack").Configuration['alias']
     */
    alias: {
      '@enact/i18n/ilib': 'ilib',
    },
    /**
     * @type import("webpack").Configuration['plugins']
     */
    plugins: [
      new GracefulFsPlugin(),
      new WebOSMetaPlugin(),
      new ILibPlugin({ symlinks: false, ilib: 'resources/ilib', publicPath: (process.env.PUBLIC_URL || '') + '/' }),
    ],
    configure: (
      /**
       * @type import("webpack").Configuration
       */
      webpackConfig,
    ) => {
      // webpack 5: use xxhash64 instead of the legacy MD4 (unsupported in Node 17+/OpenSSL 3)
      webpackConfig.output = {
        ...webpackConfig.output,
        hashFunction: 'xxhash64',
      };

      // TODO: Review css order in @enact/ui @enact/moonstone components
      const instanceOfMiniCssExtractPlugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
      if (instanceOfMiniCssExtractPlugin) {
        instanceOfMiniCssExtractPlugin.options.ignoreOrder = true;
      }

      return webpackConfig;
    },
  },
};
