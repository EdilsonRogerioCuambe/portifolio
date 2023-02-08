export default {
    name: 'sobres',
    title: 'Sobres',
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
            name: 'imagem',
            title: 'Imagem',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ],
}