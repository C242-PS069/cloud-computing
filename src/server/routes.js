const { articlesApi } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/api/articles',
        handler: articlesApi,
    },
];

module.exports = routes;
