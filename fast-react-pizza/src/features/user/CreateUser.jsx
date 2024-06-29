import { useState } from "react"

function CreateUser() {
  const [userName,setUserName]=useState()

  function handleSubmit(e){
     e.preventDefault()
  }
    return (
        <form onSubmit={handleSubmit}>
            <p>👋 WelCome! Please start telling us your name: </p>
            <input type="text" placeholder="Enter full name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <div>
             { userName !== '' &&  <button>Starting order</button> }
            </div>
        </form>
    )
}

export default CreateUser
