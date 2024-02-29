const buscaPost =async  (idPost) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await res.json()
        console.log('@@@ post =>', post )
    } catch (error) {
        console.log('@@@ error=>',error)
    }

}

buscaPost(3)