import Header from "./components/layout/Header"
import './index.css'
import Form from "./components/forms/AddRoutineForm"
import UserList from "./components/users/UserList"
import { useEffect, useState } from "react"


function App() {

 const userData =  [
  {
    "id": 1,
    "name": "Hamza",
    "avatar": "/assets/profile1.jpg",
    "routines": [
      { "id": 101, "title": "Morning Jog", "done": false },
      { "id": 102, "title": "Meditation", "done": true },
      { "id": 103, "title": "Drink Water", "done": false }
    ]
  },
  {
    "id": 2,
    "name": "Ayoub",
    "avatar": "/assets/profile2.jpg",
    "routines": [
      { "id": 201, "title": "Read a Book", "done": false },
      { "id": 202, "title": "Workout", "done": true }
    ]
  },
   {
    "id": 3,
    "name": "Mouad",
    "avatar": "/assets/profile3.jpg",
    "routines": [
      { "id": 201, "title": "Read a Book", "done": false },
      { "id": 202, "title": "Workout", "done": true }
    ]
  }
]



const [users, setUsers] = useState([])
 
  useEffect(() => {
    const savedData = localStorage.getItem("userDataLS")

    if (!savedData) {
      localStorage.setItem("userDataLS", JSON.stringify(userData))
      setUsers(userData)
    } else {
      setUsers(JSON.parse(savedData))
      
    }
  }, [])


  

  const handleDeleteRoutine = (userId, routineId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          routines: user.routines.filter(r => r.id !== routineId)
        };
      }
      return user;
    });
    setUsers(updatedUsers);
    localStorage.setItem("userDataLS", JSON.stringify(updatedUsers));
  };

  const handleDoneStatus = (userId, routineId) => {
  const updatedUsers = users.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        routines: user.routines.map(routine =>
          routine.id === routineId
            ? { ...routine, done: !routine.done } 
            : routine
        ),
      };
    }
    return user;
  });

  setUsers(updatedUsers);
  localStorage.setItem("userDataLS", JSON.stringify(updatedUsers));
};

  



  return (
    <>

    <Header/>

    <div className="max-w-[1020px] min-h-screen flex flex-col space-y-6 pb-6 justify-center mx-auto">

      <Form users = {users} setUsers={setUsers}/>
      <UserList users = {users} onDeleteRoutine={handleDeleteRoutine} onUpdateDone={handleDoneStatus} />
     

    </div>


   
    

    </>
  )
}

export default App
