export default {
    name: 'testemunhos',
    title: 'Testemunhos',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome',
            type: 'string'
        },
        {
            name: 'empresa',
            title: 'Empresa',
            type: 'string'
        },
        {
            name: 'testemunho',
            title: 'Testemunho',
            type: 'text'
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