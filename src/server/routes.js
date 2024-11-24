const { articlesApi, detailsArticleApi } = require('./handler');

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
];

module.exports = routes;
