/*
async function myFunc(a,b) {
    const sum = a + b;
    return sum;
}

function myFunc2(a, b){
    const sum = a + b;
    return sum;
}

console.log(myFunc(9, 10));

console.log(myFunc2(10, 10));
*/

// Create a Promises - 

const myPromises = new Promise((resolve, reject) => {
    // const data = {};
    const data = null;
    if(!data){
        reject("Something is Wrong");
    }
    else{
        setTimeout(() => {
            resolve("Data Read Successful");
        }, 1000);
    }
});

myPromises.then((res) => {
    console.log(res);
})
.catch(err => console.log(err));