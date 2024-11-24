const { articlesApi, detailsArticleApi, bannersApi } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/api/articles',
        handler: articlesApi,
    },
    {
        method: 'GET',
        path: '/api/articles/{id}',
        handler: detailsArticleApi,
    },
    {
        method: 'GET',
        path: '/api/banners',
        handler: bannersApi,
    },
];

module.exports = routes;
