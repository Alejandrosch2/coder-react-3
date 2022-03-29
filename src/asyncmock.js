
const categories = [

    { id:'Estrategia', description: 'Estrategia'},
    { id:'Accion', description:'Accion'},
    { id:'Horror', description:'Horror'},
    { id:'FPS', description:'FPS'},
    { id:'Deportes', description:'Deportes'}
]


export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}