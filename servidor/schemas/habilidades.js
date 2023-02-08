export default {
    name: 'habilidades',
    title: 'Habilidades',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            },
        },
    ],
}