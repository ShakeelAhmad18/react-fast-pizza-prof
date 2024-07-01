import { useState } from "react"
import Button from "../../ui/Button"

function CreateUser() {
  const [userName,setUserName]=useState('')

  function handleSubmit(e){
     e.preventDefault()
  }
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-sm mb-4 text-stone-600 md:text-4xl ">👋 <strong>WelCome!</strong> Please start telling us your name: </p>
            <input type="text" className="input mb-6 w-72" placeholder="Enter full name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <div>
             { userName !== '' && <Button>Starting order</Button> }
            </div>
        </form>
    )
}

export default CreateUser
