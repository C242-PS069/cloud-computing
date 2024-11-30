const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const InputError = require('../exceptions/InputError');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    server.ext('onPreResponse', (request, h) => {
        const { response } = request;
        if (response instanceof InputError) {
            const newResponse = h.response({
                status: 'fail',
                message: `Terjadi kesalahan dalam melakukan prediksi`,
            });
            newResponse.code(response.statusCode);
            return newResponse;
        }
        if (response.isBoom) {
            const newResponse = h.response({
                status: 'failed',
                message: response.message,
            });
            newResponse.code(response.output.statusCode);
            return newResponse;
        }
        return h.continue;
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
