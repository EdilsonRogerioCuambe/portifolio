export default {
    name: 'trabalhos',
    title: 'Trabalhos',
    type: 'document',
    fields: [
        {
            name: 'titulo',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'descricao',
            title: 'Descrição',
            type: 'string'
        },
        {
            name: 'linkProjeto',
            title: 'Link do Projeto',
            type: 'string'
        },
        {
            name: 'linkRepositorio',
            title: 'Link do Repositório',
            type: 'string'
        },
        {
            name: 'imagem',
            title: 'Imagem',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ],
}