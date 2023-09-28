import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
    banner: {
        key: 'StreamPayJS',
        text: 'StreamPayJS Alpha'
    },
    chat: {
        link: 'https://discord.gg/' // Next.js discord server,
    },
    docsRepositoryBase: 'https://github.com/stream-protocol/streampayjs/docs',
    editLink: {
        text: 'Edit this page on GitHub'
    },
    faviconGlyph: '✦',
    useNextSeoProps() {
        const { frontMatter } = useConfig()
        return {
            additionalLinkTags: [{
                    href: '/apple-icon-180x180.png',
                    rel: 'apple-touch-icon',
                    sizes: '180x180'
                },
                {
                    href: '/android-icon-192x192.png',
                    rel: 'icon',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    href: '/favicon-96x96.png',
                    rel: 'icon',
                    sizes: '96x96',
                    type: 'image/png'
                },
                {
                    href: '/favicon-32x32.png',
                    rel: 'icon',
                    sizes: '32x32',
                    type: 'image/png'
                },
                {
                    href: '/favicon-16x16.png',
                    rel: 'icon',
                    sizes: '16x16',
                    type: 'image/png'
                }
            ],
            additionalMetaTags: [
                { content: 'en', httpEquiv: 'Content-Language' },
                { content: 'StreamPayJS', name: 'apple-mobile-web-app-title' },
                { content: '#fff', name: 'msapplication-TileColor' },
                { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
            ],
            description: frontMatter.description || 'streampayjs: React hooks for Stream**Pay** with Solana Blockchain integration.',
            openGraph: {
                images: [
                    { url: frontMatter.image || 'https://streampayjs.vercel.app/og.png' }
                ]
            },
            titleTemplate: '%s – StreamPayJS',
            twitter: {
                cardType: 'summary_large_image',
                site: 'https://streampayjs.vercel.app'
            }
        }
    }
}