export default {
    name: 'experiencias',
    title: 'Experiências',
    type: 'document',
    fields: [
        {
            name: 'ano',
            title: 'Ano',
            type: 'string'
        },
        {
            name: 'trabalhos',
            title: 'Trabalhos',
            type: 'array',
            of: [{ type: 'experienciaTrabalho' }]
        },
    ]
}