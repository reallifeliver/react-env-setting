const path = require('path');

module.exports = {
  // distDir:'dist',
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    console.log(config)
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    async redirects() {
      return [
        { source: '/', destination: '/home', permanent: true}
      ]
    }
  }
}
