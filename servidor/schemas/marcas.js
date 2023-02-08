export default{
    name:'marcas',
    title:'Marcas',
    type: 'document',
    fields:[
        {
            name: 'imagem',
            title: 'Imagem',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'nome',
            title: 'Nome',
            type: 'string'
        }
    ]
}