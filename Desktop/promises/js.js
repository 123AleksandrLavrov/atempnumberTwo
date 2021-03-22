const momHappy = true;

const promise = new Promise((resolve, reject) =>{
    if(momHappy){
        const phone = {
            brand: 'Samsung',
            color: 'red',
        }
        resolve(phone);
    }else{
        const error = new Error('not phone');
        reject(error);
    }
});


const askMom = () =>{
    promise.then((result) => {console.log(result)}).catch((err) => {console.log(err.message)});
}
askMom();