# API de Download de Vídeos do Instagram

Este é um projeto de API simples para realizar o download de vídeos do Instagram. Utiliza o framework Fastify para fornecer endpoints de download.

## Como Usar

### Instalação

Certifique-se de ter o Node.js instalado. Em seguida, execute:

```bash
npm install
```
ou

```bash
yarn
```

### Execução

Para iniciar o servidor, utilize o seguinte comando:

```bash
node index.js
```

O servidor estará disponível em http://localhost:3000 por padrão.

### Endpoint de Download

Para baixar um vídeo do Instagram, acesse o seguinte endpoint:

```
GET /download/?url=Link-do-video-instagram
```

Certifique-se de substituir "Link-do-video-instagram" pela URL do vídeo desejado.

#### Exemplo de Uso

```bash
curl http://localhost:3000/download/?url=https://www.instagram.com/p/1234567890/
```

Isso retornará um JSON com a URL do vídeo disponível para download.

```json
{
  "videoUrl": "..."
}
```

Lembre-se de substituir "https://example.com/download/1234567890/video.mp4" pela URL real do vídeo.

Sinta-se à vontade para adaptar e expandir este projeto de acordo com suas necessidades.