import { useEffect, useState } from "react"
import { Container } from "../styled.components"

interface Movie {
    name: string
    description?: string
    thumbnail: string
}
interface ItemApi{
    name: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
}

const Carrusel = ()=>{
    const ts = '1688166499270'
    const hash = '117d3fd756e897ae925ed97cd28b965b'
    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=0f263cc497a0c6bf459ca7ba35ccf44b&ts=${ts}&hash=${hash}`

    const[data,setData]= useState<Movie[]>([])
 
    const getData = async(): Promise<void>=>{ 
        const items = await fetch(url)
        const item = await items.json()
        const itemFull = item.data.results.map((e:ItemApi)=>{
            const obj:Movie ={
                name: e.name,
                description: e.description,
                thumbnail: `${e.thumbnail.path}.${e.thumbnail.extension}`
            }
            return obj
        })
        setData(itemFull) 
        console.log('ITEM API',item.data.results)
        console.log('DATA',data)
    }
    useEffect(()=>{
        console.log('Iniciando...')
        getData();
    },[])
    return ( 
    <>
        {(data.length > 0) &&

        <Container height={50} src={data[0].thumbnail}>Contenedor</Container>
        }
    </>
    )
}
export default Carrusel