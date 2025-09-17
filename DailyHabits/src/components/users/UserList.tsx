import UserCard from "./UserCard"


function UserList({users}) {
  return (
    <div className=" w-full h-[450px] p-8 flex justify-between items-center">

        {users.map((user) =>(<UserCard key={user.id} user={user}/>))}
          
        
        

    </div>
  )
}

export default UserList