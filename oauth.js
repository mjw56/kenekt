module.exports = {
    server: {
        protocol: 'http',
        host: 'localhost:3000'
    },

    github: {
        key: process.env.KENEKT_GITHUB_CLIENT_ID,
        secret: process.env.KENEKT_GITHUB_CLIENT_SECRET,
        callback: '/handle_github_callback'
    },

    google: {
        key: process.env.KENEKT_GOOGLE_CLIENT_ID,
        secret: process.env.KENEKT_GOOGLE_CLIENT_SECRET,
        callback: '/handle_google_callback',
        scope: ['plus.me']
    },

    instagram: {
        key: process.env.KENEKT_INSTAGRAM_CLIENT_ID,
        secret: process.env.KENEKT_INSTAGRAM_CLIENT_SECRET,
        callback: '/handle_instagram_callback'
    },

    twitter: {
        key: process.env.KENEKT_TWITTER_CLIENT_ID,
        secret: process.env.KENEKT_TWITTER_CLIENT_SECRET,
        callback: '/handle_twitter_callback'
    },
}
