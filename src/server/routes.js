const {
    articlesApi,
    detailsArticleApi,
    bannersApi,
    recyclesApi,
} = require('./handler');

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
    {
        method: 'GET',
        path: '/api/recycles',
        handler: recyclesApi,
    },
];

module.exports = routes;
