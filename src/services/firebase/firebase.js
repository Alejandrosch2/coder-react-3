
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyDa4u7x5b7-YQiwPnZaJ5cHLwZE-R_pbpI",
//   authDomain: "coderhouse-react-54aa5.firebaseapp.com",
//   projectId: "coderhouse-react-54aa5",
//   storageBucket: "coderhouse-react-54aa5.appspot.com",
//   messagingSenderId: "749679374493",
//   appId: "1:749679374493:web:3fe551a00f6ef39096a474",
//   measurementId: "G-7C79CH7YFN"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain:  process.env.REACT_APP_authDomain,
  projectId:  process.env.REACT_APP_projectId,
  storageBucket:  process.env.REACT_APP_storageBucket,
  messagingSenderId:  process.env.REACT_APP_messagingSenderId,
  appId:  process.env.REACT_APP_appId,
  measurementId:  process.env.REACT_APP_measurementId
};



const app = initializeApp(firebaseConfig);
 
export const firestoreDb = getFirestore(app)

 export const getProducts = (categoryId) => {

    return new Promise ((resolve, reject) => {

        
      const collectionRef = categoryId ?
      query(collection(firestoreDb, 'products'), where('category', '==', categoryId )) :
      collection(firestoreDb, 'products')


        getDocs(collectionRef).then(QuerySnapshot => {

          const products = QuerySnapshot.docs.map(doc => {
            console.log(doc)
              return { id: doc.id, ...doc.data() }
            })
 
              resolve(products)
      }).catch((error) => {
        reject('Error obteniendo productos: ', error)
      })
    })
     }

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {

    const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(Response => {

            const product = {id: Response.id, ...Response.data()}
            resolve(product)
  }).catch((error) => {
      reject('Error obteniendo producto: ', error)
  })


}
   )}
    