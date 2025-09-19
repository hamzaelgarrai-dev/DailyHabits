import UserCard from "./UserCard"


function UserList({users ,onDeleteRoutine ,onUpdateDone}) {
  return (
    <div className=" w-full h-[450px] p-8 flex justify-between items-start">

        {users.map((user) =>(<UserCard key={user.id} user={user}  onDeleteRoutine={onDeleteRoutine} onUpdateDone = {onUpdateDone}/>))}
          
        
        

    </div>
  )
}

export default UserList