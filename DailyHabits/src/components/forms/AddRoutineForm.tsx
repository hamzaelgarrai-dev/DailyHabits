import React from 'react'

function Form() {
  return (

    <div className='flex  justify-between px-2 items-center bg-white mx-auto w-full h-[90px] mt-10 shadow-md rounded-md  '>

       
        <input type="text" name="" id="" placeholder='Enter a Task' className = " w-[750px] h-[45px] rounded-lg border border-gray-400 p-4" />
        <select name="" id="" className='border border-gray-400 w-32 h-[30px] rounded-lg'>
            <option value="Hamza">Hamza</option>
            <option value="Ayoub">Ayoub</option>
            <option value="Mouad">Mouad</option>
        </select>
        <button type="submit" className='border border-black w-28 h-[30px] rounded-lg'>Submit Task</button>
        

        
        
    </div>

  )
}

export default Form