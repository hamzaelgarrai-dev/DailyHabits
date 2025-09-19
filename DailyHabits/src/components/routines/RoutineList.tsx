import React from 'react'
import RoutineCard from './RoutineCard'

function RoutineList({ routines,userId, onDeleteRoutine,onUpdateDone }) {
  return (

    <div className='flex flex-col mx-auto justify-between space-y-4 '>
        {
            routines.map(routine =>(

                 <RoutineCard 
          key={routine.id}
          routine={routine}
          userId={userId}
          onDelete={onDeleteRoutine}
          onUpdateDone = {onUpdateDone} />
            ))
        }


       

    </div>

  )
}

export default RoutineList