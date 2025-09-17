import Header from "./components/layout/Header"
import './index.css'
import Form from "./components/forms/AddRoutineForm"
import UserList from "./components/users/UserList"
import Challenge from "./components/challenge"
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

const initialTime = 10000

    const JSONData = JSON.stringify(userData)
    localStorage.setItem("userDataLS", JSONData);

  return (
    <>

    <Header/>

    <div className="max-w-[1020px] flex flex-col space-y-6 pb-6 justify-center mx-auto">

      <Form users = {userData}/>
      <UserList users = {userData}/>


    </div>


    <Challenge initialtime = {initialTime}/>
    

    </>
  )
}

export default App
