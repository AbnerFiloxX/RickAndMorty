const post = [
    {
        userId: 1,
        id: 1,
        title: 'primer post',
        body:'cosas insignificantes sasdfghjhgfdsdfghjhgfdssdfghjkjhgfdssdfghjkjhgfdsdfghgfdssdfg'
    },
    {
        userId: 1,
        id: 2,
        title: 'segundo post',
        body:'cosas insignificantes sasdfghjhgfdsdfghjhgfdssdfghjkjhgfdssdfghjkjhgfdsdfghgfdssdfg'
    },
    {
        userId: 1,
        id: 3,
        title: 'tercer post',
        body:'cosas insignificantes sasdfghjhgfdsdfghjhgfdssdfghjkjhgfdssdfghjkjhgfdsdfghgfdssdfg'
    },
    {
        userId: 1,
        id: 4,
        title: 'cuarto post',
        body:'cosas insignificantes sasdfghjhgfdsdfghjhgfdssdfghjkjhgfdssdfghjkjhgfdsdfghgfdssdfg'
    },
    {
        userId: 1,
        id: 5,
        title: 'quinto post',
        body:'cosas insignificantes sasdfghjhgfdsdfghjhgfdssdfghjkjhgfdssdfghjkjhgfdsdfghgfdssdfg'
    },
]

const findById = (id,callback) =>{
    const resultado = post.find((item) => item.id === id)

    if(resultado){
        callback(null,resultado)
    }else{
        callback('el post no fue encontrado'+id)
    }    
}

findById(89, (err,resultado)=>{
    if(err){
        return console.log(err)
    }
    console.log('@@@ post =>',resultado)
})

findByIdPromise = id => {
    const resultado = post.find((item) => item.id === id)

    return new Promise((resolve, reject)=>{
        if(resultado){
            resolve(resultado)
        }else{
            reject('con promesa tampoco se encontro:'+id)
        }
    })
}

findByIdPromise(3)
.then((item) => console.log(item))
.catch((err) => console.log(err))
.finally(()=>console.log('fin de la promesa'))

const findByIdAsync = id =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const resultado = post.find((item) => item.id === id)
            resultado ? resolve(resultado): reject('ahora con reject:' + id)
        }, 5000)
    })
}

const buscar =async () => {
    const posts = await Promise.all([
        findByIdAsync(3),
        findByIdAsync(2),
        findByIdAsync(5)
    ])
    posts.forEach((item)=>{
        console.log(item.title)
    })
}

buscar()