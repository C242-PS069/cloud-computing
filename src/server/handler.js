const axios = require('axios');
require('dotenv').config();

const articlesApi = async (request, h) => {
    try {
        const response = await axios.get(
            `http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY}&keywords=sampah&countries=id&limit=10`
        );

        const articles = response.data.data;

        return h
            .response({
                status: 'success',
                message: 'Articles fetched successfully',
                data: articles.map((article) => ({
                    title: article.title,
                    image: article.image,
                    description: article.description,
                    url: article.url,
                    published_at: article.published_at,
                })),
            })
            .code(200);
    } catch (error) {
        console.error(error.message);
        return h
            .response({
                staus: 'failed',
                message: 'Failed to fetch articles',
                data: [],
            })
            .code(500);
    }
};

module.exports = { articlesApi };
