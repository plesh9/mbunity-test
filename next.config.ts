import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: false,
    devIndicators: undefined,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            oneOf: [
                {
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack']
                },
                {
                    type: 'asset/resource'
                }
            ]
        })

        return config
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js'
                }
            }
        }
    }
}

export default nextConfig
