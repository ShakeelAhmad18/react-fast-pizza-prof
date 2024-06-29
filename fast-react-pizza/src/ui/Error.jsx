import { useNavigate } from "react-router-dom"

function Error() {

    const navigate=useNavigate()
    return (
        <div>
            <h1>SomeThing went wrong 😥</h1>
            <p>%Message%</p>
            <button onClick={()=>navigate(-1)}>&larr; Go back</button>
        </div>
    )
}

export default Error
