const {
    articlesApi,
    detailsArticleApi,
    bannersApi,
    recyclesApi,
    registerApi,
    loginApi,
    resetPasswordApi,
    editProfileApi,
    detailsRecycleApi,
} = require('./handler');
const verifyJWT = require('../middleware');

const routes = [
    {
        method: 'GET',
        path: '/api/articles',
        handler: articlesApi,
        options: {
            pre: [{ method: verifyJWT }],
        },
    },
    {
        method: 'GET',
        path: '/api/articles/{id}',
        handler: detailsArticleApi,
        options: {
            pre: [{ method: verifyJWT }],
        },
    },
    {
        method: 'GET',
        path: '/api/banners',
        handler: bannersApi,
        options: {
            pre: [{ method: verifyJWT }],
        },
    },
    {
        method: 'GET',
        path: '/api/recycles/{id}',
        handler: detailsRecycleApi,
        options: {
            pre: [{ method: verifyJWT }],
        },
    },
    {
        method: 'GET',
        path: '/api/recycles',
        handler: recyclesApi,
        options: {
            pre: [{ method: verifyJWT }],
        },
    },
    {
        method: 'POST',
        path: '/register',
        handler: registerApi,
    },
    {
        method: 'POST',
        path: '/login',
        handler: loginApi,
    },
    {
        method: 'POST',
        path: '/reset-password',
        handler: resetPasswordApi,
    },
    {
        method: 'POST',
        path: '/edit-profile',
        handler: editProfileApi,
        options: {
            pre: [{ method: verifyJWT }],
        },
    },
];

module.exports = routes;
