// buscar links salvos. 

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


// salvar link no local storage 

export async function savedLink(key, newLink){
    let linksStored = await getLinksSave(key)

    // se ja tiver link salvo com algum ID não deixa duplicar 
    const hasLink = linksStored.some( link => link.id == newLink.id)

    if(hasLink){
        console.log('Esse link já existe: ' + hasLink)
        return; 
    }

    // adiciona o novo link na lista 
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))

    return console.log('Link salvo com sucesso!')
}

//deletar algum link 

export async function deleteLink(links, id){

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('Link deletado com sucesso.')
    return myLinks
}