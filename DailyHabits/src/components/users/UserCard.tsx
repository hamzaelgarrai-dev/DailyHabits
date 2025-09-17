import React from 'react'
import RoutineList from '../routines/RoutineList'



function UserCard({user}) {
  return (
    <div className='bg-[#E0F2FE] w-72 h-96 rounded-md flex flex-col items-center justify-center '>

        <img
        src={user.avatar}
        alt="User Avatar"
        className="w-20 h-20 rounded-full object-cover border-2 border-[#0080FC]"
      />
      <p>{user.name}</p>

      <RoutineList routines={user.routines}/>

    </div>
  )
}

export default UserCard