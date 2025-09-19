

function Form({ users, setUsers }) {

  function handleSubmit(e) {
    e.preventDefault();

    const taskTitle = e.target.taskTitleInput.value;
    const selectedUserId = Number(e.target.userSelect.value);

    if (!taskTitle.trim()) {
      alert("Please enter a task");
      return;
    }

    
    const updatedUsers = users.map((user) => {
      if (user.id === selectedUserId) {
        return {
          ...user,
          routines: [
            ...user.routines,
            {
              id: Date.now(),
              title: taskTitle,
              done: false,
            },
          ],
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    localStorage.setItem("userDataLS", JSON.stringify(updatedUsers));

    e.target.reset();
  }

  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-2 items-center bg-white mx-auto w-full h-[90px] mt-10 shadow-md rounded-md"
    >
      <input
        type="text"
        name="taskTitleInput"
        placeholder="Enter a Task"
        className="w-[750px] h-[38px] rounded-lg border border-gray-400 p-4"
      />
      <select
        name="userSelect"
        className="border border-gray-400 w-32 h-[38px] rounded-lg p-2"
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="border text-white bg-[#0080FC] w-28 h-[38px] rounded-lg"
      >
        Submit Task
      </button>
    </form>
  );
}

export default Form;
