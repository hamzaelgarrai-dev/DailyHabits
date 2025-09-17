import React from 'react'

function Form({users}) {
  return (

    <div className='flex  justify-between px-2 items-center bg-white mx-auto w-full h-[90px] mt-10 shadow-md rounded-md  '>

       
        <input type="text" name="" id="" placeholder='Enter a Task' className = " w-[750px] h-[38px] rounded-lg border border-gray-400 p-4" />
        <select name="" id="" className='border border-gray-400 w-32 h-[38px] rounded-lg p-2'>
            {users.map((user)=> (

              <option key={user.id} value={user.name}>{user.name}</option>
            ))}
        </select>
        <button type="submit" className='border text-white  bg-[#0080FC] w-28 h-[38px] rounded-lg'>Submit Task</button>
        

        
        
    </div>

  )
}

export default Form