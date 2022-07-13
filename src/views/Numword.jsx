import React from 'react'
import {useParams} from 'react-router-dom'

const Numword = () => {
    const {numword} = useParams()
    return (
        <div>
            {
                isNaN(numword)?
                <h2>The word is: {numword}</h2>:
                <h2>The number is: {numword}</h2>
            }
        </div>
    )
}
export default Numword