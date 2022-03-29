# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## EMPEZAR
para iniciar la aplicacion tenemos que ir a la consola y escribir npm start, la aplicacion funciona de la siguiente manera:

# Productos:

Los productos los tenemos guardados en una base de datos, llamada firebase, desde la base de datos, le damos el nombre al producto, el stock, la categoria, el precio, una imagen y una breve descripcion del producto.


# Components

En esta carpeta se encuentran la mayoria de las funciones que permiten correr la app, aca estan las carpetas mas importantes:
- Navbar
- Items
- ItemList
- ItemListContainer
- ItemDetail
- ItemDeatailContainer
- Cart
- CartItems
- FireBase


## NavBar
en el navbar tenemos las diferentes categorias que ofrece la pagina, estas categorias las conseguimos exportando una funcion del archivo asyncmock, tambien importamos el link que nos brinda react en el titulo de nuestra pagina para volver a la pagina principal, utilizamos el navlink en las categorias para que el usuario sepa en que categoria se encuentra.

## Items
En esta seccion tenemos la presentacion "la card" de nuestros productos, la estructura de como se va a presentar el producto para el usuario, con un link en el footer que nos lleva a la descripcion del producto

## ItemList

mediante un mapeo de items a cada producto le damos su propio "card" usando cada id particular del producto para no repetir el producto o que falte alguno,que usamos en items para luego mostrar cada "card" en itemlistContainer. aclaracion, el id, precio, nombre, etc de los productos los buscamos en el firebase,

## ItemListContainer

Aca buscamos a los productos en el fire base usando la funcion getProducts (funcion exportada en la carpeta firebase), buscamos los datos mediante promesas,
es una tarea asincronica, esperando a que nos llegue los datos del firebase el usuario se le deja un mensaje de cargando para hacerle saber que algo esta pasando en la pagina, si hay algun tipo de error o no se encontraron productos nos va a tirar error, caso contrario nos muestra los productos

## ItemDetail
 Cuando hacemos click en la descripcion del producto, nos encontramos con otra estructura o "card" de presentacion del producto, en donde tenemos mayor informacion del producto, cuanto stock tiene, una descripcion del producto y la opcion de agregarlo al carrito(la cantidad que querramos siempre y cuando no se exceda de la cantidad de stock disponible). importamos funciones de cartContext para sumar al carrito el producto y corroborar si es el mismo producto que estamos agregando. Usa como parametros el id del producto, su nombre, imagen, precio, categoria, stock y descripcion
 
 ## ItemDetailContainer
 Lo mismo que con itemListContainer, buscamos los productos en la base de datos
 usando la funcion getProductsById, tambien es una promesa, nos muestra solo el producto que seleccionamos.
 
 ## Cart
 En el carrito encontramos los productos que agregamos, la estructura de como se muestra se encuentra en CartItems, aca en el carrito se le pide al usuario que complete un par de datos para poder realizar la compra, le damos la opcion al usuario de remover o seguir agregando productos al carrito, cada accion que hace el usuario se le informa (cada producto que borra del carrito o que agrega).
 Cuando el usuario finaliza la compra, se le notificara si la compra fue exitosa con un mensaje mostrando su numero de orden, de lo contrario le tira que hubo un error en su compra. Utiliza las siguiente funciones del CartContext (products, clearCart, getTotal, removeItem)
 
 ## CartItems
 Estructura de como se muestran los productos que agregamos en el Carrito, donde tenemos la funcion de eliminar el producto del carrito
 
 ## fireBase
 
Nuestra base de datos en donde tenemos guardados nuestros productos, aca cuando se confirma una compra se genera un orden de compra teniendo los datos que se le pide el usuario antes de realizar una compra para tener control de quien compra y que productos se vendieron.

# App

Aca es donde exportamos la mayoria de los componentes,
con las siguientes rutas: 
- pagina principal "/" aca tenemos todos los productos que tenemos en ItemListContainer
- categorias "/category/categoryId" filtramos los porductos de ItemListContainer con la categoria que deseamos
- detail "/detaial/productId" al clickear en un producto para que nos muestre mas detalles, nos lleva a esta pagina
- Cart "/Cart" cuando agregamos un producto al carrito nos da la opcion de ir al carrito o al tocar el icono del carrito nos lleva a esta pagina



[proyectofinalReact.gif](proyectofinalReact.gif)


