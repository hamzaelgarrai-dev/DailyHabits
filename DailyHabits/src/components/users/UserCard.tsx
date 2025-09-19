import React from 'react'
import RoutineList from '../routines/RoutineList'



function UserCard({ user, onDeleteRoutine ,onUpdateDone }) {

   const totalRoutines = user.routines.length;
  const completedRoutines = user.routines.filter(routine => routine.done).length;

  
  const progress = totalRoutines === 0 ? 0 : (completedRoutines / totalRoutines) * 100;


  return ( 
    <div className='bg-[#E0F2FE] w-[310px]  rounded-md flex flex-col items-center justify-start py-5 '>
      <div className="mb-6">

        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#0080FC] mb-2 "
        />
        <p className='text-center font-medium mb-2'>{user.name}</p>
        <p className="text-sm text-start mt-1 mb-2">
          Progress :{Math.round(progress)}%
        </p>


        <div className="w-[250px] bg-gray-200 rounded-full h-2.5 ">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{width: `${Math.round(progress)}%`}}></div>
        </div>


      </div>


      <RoutineList routines={user.routines} userId={user.id} onDeleteRoutine={onDeleteRoutine} onUpdateDone = {onUpdateDone} />

    </div>
  )
}

export default UserCard