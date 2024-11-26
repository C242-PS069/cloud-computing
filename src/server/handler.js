const { articles, detailsArticle } = require('../api/articles');
const banners = require('../api/banner');

const articlesApi = async (request, h) => {
    const articlesList = await articles();

    if (articlesList.length === 0) {
        return h
            .response({
                status: 'fail',
                message: `Articles not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'Articles fetched successfully',
            data: articlesList,
        })
        .code(200);
};

const detailsArticleApi = async (request, h) => {
    const { id } = request.params;

    const article = await detailsArticle(id);

    if (!article) {
        return h
            .response({
                status: 'fail',
                message: `Article with ID ${id} not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'Article fetched successfully',
            data: article,
        })
        .code(200);
};

const bannersApi = async (request, h) => {
    const bannerList = await banners();

    if (bannerList.length === 0) {
        return h
            .response({
                status: 'fail',
                message: `Banners not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'banners fetched successfully',
            data: bannerList,
        })
        .code(200);
};

module.exports = { articlesApi, detailsArticleApi, bannersApi };
