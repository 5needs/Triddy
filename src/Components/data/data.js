import moment from "moment"
const conv1 = {id: 1 , author : {id: 2, name: 'pruebastina', src: 'https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg'}, messages:  [
        {
          id: 1,
          author: 1,
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date("2019/10/06").getTime()
        },
        {
          id: 2,
          author: 2,
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 3,
          author: 2,
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 4,
          author: 1,
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 5,
          author: 1,
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 6,
          author: 1,
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 7,
          author: 2,
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 8,
          author: 2,
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 9,
          author: 1,
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 10,
          author: 2,
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply look',
          timestamp: new Date().getTime()
		}]};
		
const conv2 = {id: 2 , author : {id: 3, name: 'pruebastian', src: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg'}, messages:  [
        {
          id: 11,
          author: 1,
          message: 'Hola, me gustaria rentar una bata',
          timestamp: new Date("2021/02/06").getTime()
        },
        {
          id: 12,
          author: 3,
          message: 'Perfecto, ¿para qué día?',
          timestamp: new Date("2021/02/10").getTime()
        },
        {
          id: 13,
          author: 3,
          message: 'En el producto está la disponibilidad',
          timestamp: new Date("2021/02/10").getTime()
        },
        {
          id: 14,
          author: 1,
          message: 'La veré',
          timestamp: new Date("2021/02/11").getTime()
        },
        {
          id: 15,
          author: 1,
          message: 'para el jueves está bien',
          timestamp: new Date("2021/02/11").getTime()
        },
        {
          id: 16,
          author: 1,
          message: 'Gracias',
          timestamp: new Date("2021/02/11").getTime()
        }]};
		
		
const conversations = [conv1, conv2];

export default conversations;


const item1 = {nombre : 'libro pendiente', descripcion: 'libro de calculo integral con formulas al final', devuelto: false, 
              src: 'https://images.freeimages.com/images/large-previews/c56/book-1424031.jpg', fechaEntrega : new moment("2021-02-28")}
const item2 = {nombre : 'libro devuelto', descripcion: 'libro de calculo integral con formulas al final', devuelto: true, 
              src: 'https://images.freeimages.com/images/large-previews/c56/book-1424031.jpg', fechaEntrega : new moment("2021-02-24")}
export const misItems = [item1, item2];

