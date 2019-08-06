const withPlugins = require('next-compose-plugins')
const tm = require('next-transpile-modules')

const { parsed: env } = require('dotenv').config()

const plugins = [[tm, { transpileModules: ['@notez/graphql'] }]]

module.exports = withPlugins(plugins, { env })
