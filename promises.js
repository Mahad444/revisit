let p = new Promise((resolve,reject)=>{
    let a = 4*4
    if (a === 16 ){
        resolve('success')
    }
    else{
        reject("Failed")
    }
})


p.then((message)=>{
    console.log("this then is a " + message)
})
p.catch((message)=>{
    console.log("this catch is a" + message)
})