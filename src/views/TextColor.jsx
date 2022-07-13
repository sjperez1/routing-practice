import React from 'react'
import {useParams} from 'react-router-dom'
import Error from './Error'
const TextColor = () => {
    const {numberword, color, background} = useParams()
    return (
        <div>
            {
                isNaN(numberword)?
                <h2 style={{color: color, backgroundColor: background}}>The word is: {numberword}</h2>:
                <Error/>
            }
        </div>
    )
}
export default TextColor