// const promise = new Promise(function(resolve, reject){
//     resolve('Todo godines')
// });

const cows = 14;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve('Godines')
    }else{
        reject('Godnt');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Finally'))