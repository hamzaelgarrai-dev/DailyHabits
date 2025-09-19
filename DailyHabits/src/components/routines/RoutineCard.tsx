import React from 'react'
import { useState } from 'react'

function RoutineCard({ routine ,userId ,onDelete,onUpdateDone }) {

  
  return (

    <div className='flex justify-between items-center  bg-white w-72 h-12 rounded-lg p-2'>

       

      <p className={routine.done ? "line-through text-gray-400":"" }>{routine.title}</p>


      <div className="flex items-center justify-center space-x-2">

        {!routine.done ? (
          <button
            onClick={() => onUpdateDone(userId, routine.id)}
            className='w-14 h-7 text-sm bg-green-500 rounded-lg'
          >
            Done
          </button>
        ) : (
          <button
            onClick={() => onUpdateDone(userId, routine.id)}
            className='w-16 h-7 text-sm bg-yellow-300 rounded-lg'
          >
            Annuler
          </button>
        )}

        <button  onClick={() => onDelete(userId, routine.id)} className='w-20 h-7 text-sm bg-red-500 rounded-lg'>Supprimer</button>
      </div>






    </div>

  )
}

export default RoutineCard