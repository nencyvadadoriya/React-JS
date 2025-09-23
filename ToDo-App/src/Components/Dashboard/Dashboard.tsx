import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

function Dashboard() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [allTask, setAllTask] = useState<any[]>([]);
  const [completedTasks, setCompletedTasks] = useState<any[]>([]);
  const [editedId, setEditedId] = useState<number>();

  const completeTask = (index: number) => {
    const taskToComplete = allTask[index];

    // remove pending task
    const updatedPending = allTask.filter((_, i) => i !== index);
    setAllTask(updatedPending);
    localStorage.setItem("data", JSON.stringify(updatedPending));

    // add complete task
    const updatedCompleted = [...completedTasks, taskToComplete];
    setCompletedTasks(updatedCompleted);
    localStorage.setItem("complete task", JSON.stringify(updatedCompleted));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data') || "[]");
    setAllTask(data);
  }, []);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    setAllTask(data);
    const completed = JSON.parse(localStorage.getItem("complete task") || "[]");
    setCompletedTasks(completed);
  }, []);
  const undoCompleteTask = (index: number) => {
    const taskToUndo = completedTasks[index];

    // remeove complete task
    const updatedCompleted = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompleted);
    localStorage.setItem("complete task", JSON.stringify(updatedCompleted));

    // add back  pending tasks
    const updatedPending = [...allTask, taskToUndo];
    setAllTask(updatedPending);
    localStorage.setItem("data", JSON.stringify(updatedPending));
  };
  //edit tasks
  const EditTask = (i: number) => {
    setEditedId(i);
    const Task = allTask[i];
    setTask(Task.title);
    setPriority(Task.priority);
    setDueDate(Task.dueDate);
  };
  const updateTask = () => {
    if (editedId === undefined) return;
    const updatedTasks = [...allTask];
    updatedTasks[editedId] = { title: task, priority, dueDate };

    setAllTask(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));

    toast.success("Task updated successfully!");
    setEditedId(undefined);
    setTask("");
    setPriority("Low");
    setDueDate("");
  };
  const handleTask = () => {
    if (!task.trim()) {
      toast.error("Please enter a task");
      return;
    }

    if (editedId !== undefined) {
      updateTask();
    } else {
      addTask();
    }
  };
  // add new task
  const addTask = () => {
    const duplicate = allTask.find(
      (t) => t.title.toLowerCase() === task.toLowerCase()
    );
    if (duplicate) {
      toast.error("Task already added!");
      return;
    }
    const newTask = { title: task, priority, dueDate };
    const updatedTasks = [...allTask, newTask];
    localStorage.setItem('data', JSON.stringify(updatedTasks));
    setAllTask(updatedTasks);
    toast.success("Task added successfully!");

    // Reset inputs
    setTask("");
    setPriority("Low");
    setDueDate("");
  };

  // delete tasks 
  const deleteTask = (index: number, type: "pending" | "completed") => {
    const taskList = type === "pending" ? allTask : completedTasks;
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete "${taskList[index].title}" Task?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = taskList.filter((_, i) => i !== index);

        if (type === "pending") {
          setAllTask(updatedTasks);
          localStorage.setItem("data", JSON.stringify(updatedTasks));
        } else {
          setCompletedTasks(updatedTasks);
          localStorage.setItem("complete task", JSON.stringify(updatedTasks));
        }

        Swal.fire("Deleted!", "Task has been removed.", "success");
      }
    });
  };

  return (
    <div className={`p-4 grid grid-cols-1 md:grid-cols-2 gap-6 `}>
      {/* Header */}
      <div className="col-span-1 md:col-span-2 flex items-center justify-between px-6 py-3 bg-white shadow-md">
        <div className="flex items-center space-x-6 flex-1">
          <h1 className="text-xl font-bold text-green-800">Dashboard</h1>

          <div className="relative flex-1 max-w-3xl ml-6 flex gap-2">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a task"
              className="flex-1 pl-4 pr-12 py-2 bg-green-100 text-black rounded-full focus:ring-2 focus:ring-green-600 outline-none"
            />

            {/* Priority */}
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="px-3 py-2 rounded bg-green-100 text-gray-800 dark:bg-gray-700 dark:text-white"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            {/* Date */}
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="px-3 py-2 rounded bg-green-100 text-gray-800 dark:bg-gray-700 dark:text-white"
            />

            {/* Add Button */}
            <button
              onClick={handleTask}
              className="px-4 py-2 rounded-full bg-green-600 text-white font-bold shadow-md hover:bg-green-700 transition-all"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <img src="https://i.pinimg.com/1200x/a5/2c/44/a52c4459940205d17c98ab5c254689f5.jpg" alt="profile" className="w-10 h-10 rounded-full border-2 border-green-600 shadow-sm" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">Nency Vadadoriya</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
        </div>
      </div>
      {/* Pending Tasks */}
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-xl  text-green-800 font-bold">Pending Tasks</h2>
        </div>
        <div className="mt-4 max-h-64 overflow-y-auto space-y-2">
          {allTask.length === 0 ? (
            <p className="text-gray-500">No pending tasks</p>
          ) : (
            allTask.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-green-600 cursor-pointer hover:bg-green-500 transition-colors duration-200" onClick={() => completeTask(index)}>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black font-semibold">{task.title}</span>
                    <span className="text-sm text-gray-700">
                      Priority: {task.priority} | Due: {task.dueDate || "No"}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-500 shadow transition-colors duration-200 text-sm"
                    onClick={() => EditTask(index)}>
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTask(index, "pending")}
                    className="px-3 py-1 text-white bg-red-400 rounded hover:bg-red-500 shadow text-sm"
                  >
                    🗑️
                  </button>

                </div>
              </div>
            ))
          )}
        </div>
      </Card>

      {/* Completed Tasks */}
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-green-800 font-bold">Completed Tasks</h2>
        </div>

        <div className="mt-4 max-h-64 overflow-y-auto space-y-2">
          {completedTasks.length === 0 ? (
            <p className="text-gray-500">No completed tasks</p>
          ) : (
            completedTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Undo Circle */}
                  <div
                    className="w-5 h-5 rounded-full bg-green-600 cursor-pointer"
                    onClick={() => undoCompleteTask(index)}
                    title="Mark as Pending"
                  ></div>
                  <span className="text-black line-through">
                    {task.title} (Priority: {task.priority}, Due: {task.dueDate || "No"})
                  </span>
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteTask(index, "completed")}
                  className="px-3 py-1 text-white bg-red-400 rounded hover:bg-red-500 shadow text-sm"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </Card>

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
