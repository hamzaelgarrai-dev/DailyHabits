import React from 'react'
import { useState } from 'react'

function RoutineCard({ routine }) {

  const [done, setDone] = useState(routine.done)
  const changeDone =()=>{

    setDone(!done )
  }
  return (

    <div className='flex justify-between items-center  bg-white w-72 h-12 rounded-lg p-2'>

      <p>{routine.title}</p>


      <div className="flex items-center justify-center space-x-2">

        {
          done ?

            (<button onClick={changeDone} className='w-14 h-7 text-sm bg-green-500 rounded-lg '>Done</button>) :
            (<button onClick={changeDone} className='w-16 h-7 text-sm bg-yellow-300 rounded-lg' >Annuler</button>)

        }

        <button className='w-20 h-7 text-sm bg-red-500 rounded-lg'>Supprimer</button>
      </div>






    </div>

  )
}

export default RoutineCard