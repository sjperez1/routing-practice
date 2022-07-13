import React from 'react'
import {useNavigate} from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>That page does not exist.</h2>
            <button onClick={() => navigate("/home")}>Go Home</button>
            <button onClick={() => navigate(-1)}> Go Back</button>
        </div>
    )
}
export default Error