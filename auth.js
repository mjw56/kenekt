module.exports = {
    client_id: {
        github: process.env.KENEKT_GITHUB_CLIENT_ID
    },
    client_secret: {
        github: process.env.KENEKT_GITHUB_CLIENT_SECRET
    },
    token_host: {
        github: 'https://github.com'
    },
    token_path: {
        github: '/login/oauth/access_token'
    },
    authorization_path: {
        github: '/login/oauth/authorize'
    },
    redirect_uri: {
        github: 'http://localhost:3000/callback'
    },
    scope: {
        github: 'notifications'
    },
    state: {
        github: '3(#0/!~'
    },
    apiUserBase: {
        github: 'https://api.github.com/user?access_token='
    }
};
