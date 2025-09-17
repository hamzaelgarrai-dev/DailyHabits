import React from 'react'
import RoutineCard from './RoutineCard'

function RoutineList({ routines }) {
  return (

    <div className='flex flex-col mx-auto justify-between'>
        {
            routines.map(routine =>(

                 <RoutineCard key={routine.id} routine = {routine}/>
            ))
        }


       

    </div>

  )
}

export default RoutineList