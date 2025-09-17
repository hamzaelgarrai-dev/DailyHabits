import React from 'react'

function RoutineCard({routine}) {
  return (

    <div className='flex justify-between items-center bg-white w-60 h-12'>

        <p>{routine.title}</p>

        

    </div>

  )
}

export default RoutineCard