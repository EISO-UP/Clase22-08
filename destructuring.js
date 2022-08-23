let arr=['Luis', 'Esteban', 'Haro']
/* 
const firstName= arr[0]
const lastName= arr[1] */

const [firstName, lastName]=arr;

/* console.log('firstName, lastName', firstName, lastName)
 */
let arr2=['Luis', 'Esteban', 'Haro']

const [firstName2, lastName2]=arr;

/* console.log('firstName2, lastName2', firstName2, lastName2)
 */
let [a,b,c]='xyz'
let [one, two,three]=new Set([1,2,3])
/* console.log('one',one)
 */

let user={
    userName: 'Luis',
    userLastName: 'Haro',
    userPhone: '4'
}

const {userName} = user;
console.log('userName', userName)

const {userLastName: apellido, userPhone = '555555555'} = user;
console.log('userPhone', userPhone)

const user2 = {
    ...user,
    userName: 'Jose',
    nationality: 'Mex'
}

console.log('user2', user2)

const {nationality, ...rest} = user2;
console.log('rest', rest)

const item = {
    itemName:'Casa',
    itemDescription:{
        size: 14,
        color: 'red'
    }
}

const {itemDescription:{size, color: clr}}=item;
console.log('size', size)
console.log('clr', clr)