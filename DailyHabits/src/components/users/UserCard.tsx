import React from 'react'
import RoutineList from '../routines/RoutineList'



function UserCard({ user }) {
  return (
    <div className='bg-[#E0F2FE] w-[310px] h-96 rounded-md flex flex-col items-center justify-start pt-5 '>
      <div className="mb-6">

        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover border-2 border-[#0080FC] mb-2 "
        />
        <p className='text-center font-medium'>{user.name}</p>


        {/* <div className="w-[250px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
        </div> */}


      </div>


      <RoutineList routines={user.routines} />

    </div>
  )
}

export default UserCard