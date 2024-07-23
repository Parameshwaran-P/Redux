import React, { useState } from 'react'

const Home = () => {

  const [forminput, setForminput] = useState({
    name:"",
    age:"",
    email:"",
    contact:""
  })

  const handleChange = (e) =>{
   const {name, value} = e.target
   setForminput((prev)=>{
    return{...prev, [name]:value}
   })
   
  }

  console.log(forminput);
  return (
    <div>
      <form action="">
        <label htmlFor="">name</label><br />
        <input type="text" value={forminput.name} onChange={handleChange} name='name'/><br />
        <label htmlFor="">age</label><br />
        <input type="number" value={forminput.age} onChange={handleChange} name='age'/><br />
        <label htmlFor="">email</label><br />
        <input type="text" value={forminput.email} onChange={handleChange} name='email'/><br />
        <label htmlFor="">contact</label><br />
        <input type="number" value={forminput.contact} onChange={handleChange} name='contact'/><br />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Home