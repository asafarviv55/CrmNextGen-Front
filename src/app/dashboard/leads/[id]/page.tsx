import getData from "@/app/utils/fetcher"
import { Interface } from "readline"

interface LaedProps{
    params: { id: string }
}

export default async function Lead({ params }: LaedProps ){
    const data = await getData('https://jsonplaceholder.typicode.com/todos/' + params.id)
    return <>Lead: {data.title}</>
}