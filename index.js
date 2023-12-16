import fastify from 'fastify';

import { fetchPostJson } from './src/index.js'

const app = fastify();

const PORT = process.env.PORT || 3000

app.get('/', async (request, reply) => {
    reply.send('/download/?url=Link-do-video-instagram');
});

app.get('/download/', async (request, reply) => {
    const { url } = request.query;

    if (!url) reply.send({ error: 'forneça uma URL do instagram' })
    let resultado = await fetchPostJson(url)
    reply.send({ ...resultado });
});

const start = async () => {
    try {
        app.listen({ host: '0.0.0.0', port: PORT });
        console.log('Servidor rodando em http://localhost:3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();