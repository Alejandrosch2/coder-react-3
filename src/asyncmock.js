const products = [
    { id: 1, name: 'Darkest Dungeon', price: '$150', category: 'Estrategia', img:'https://i.ibb.co/KsqJXsj/darkest-dungeon-cover.jpg', stock: 8, description:'turn base RPG'},
    { id: 2, name: 'Dark Souls III', price: '$1800', category: 'Accion', img:'https://i.ibb.co/Mn6HCVZ/Dark-Souls-III-Portada.jpg', stock: 10, description:'Ta dificil'},
    { id: 3, name: 'DarkWood', price: '$120', category: 'Horror', img:'https://i.ibb.co/bzS5cDR/Darkwood-image1600w.jpg', stock: 5, description:'indie'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}