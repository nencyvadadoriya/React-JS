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

  const themes: any = {
    "bg-white": {
      bg: "bg-white",
      text: "text-black",
      input: "bg-gray-100 text-black",
      button: "bg-green-600 text-white hover:bg-green-700",
      deleteBtn: "bg-red-400 text-white hover:bg-red-500",
      pendingCard: "bg-gray-200",
      completedCard: "bg-green-200",
      circlePending: "border-gray-400",
      circleCompleted: "bg-green-600",
    },
    "bg-blue-200": {
      bg: "bg-blue-100",
      text: "text-blue-900",
      input: "bg-blue-200 text-blue-900",
      button: "bg-blue-600 text-white hover:bg-blue-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-blue-300",
      completedCard: "bg-blue-300",
      circlePending: "border-blue-500",
      circleCompleted: "bg-blue-600",
    },
    "bg-indigo-300": {
      bg: "bg-indigo-100",
      text: "text-indigo-900",
      input: "bg-indigo-200 text-indigo-900",
      button: "bg-indigo-600 text-white hover:bg-indigo-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-indigo-300",
      completedCard: "bg-indigo-300",
      circlePending: "border-indigo-500",
      circleCompleted: "bg-indigo-600",
    },
    "bg-green-200": {
      bg: "bg-green-100",
      text: "text-green-900",
      input: "bg-green-200 text-green-900",
      button: "bg-green-600 text-white hover:bg-green-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-green-300",
      completedCard: "bg-green-300",
      circlePending: "border-green-500",
      circleCompleted: "bg-green-600",
    },
    "bg-purple-200": {
      bg: "bg-purple-100",
      text: "text-purple-900",
      input: "bg-purple-200 text-purple-900",
      button: "bg-purple-600 text-white hover:bg-purple-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-purple-300",
      completedCard: "bg-purple-300",
      circlePending: "border-purple-500",
      circleCompleted: "bg-purple-600",
    },
    "bg-red-200": {
      bg: "bg-red-100",
      text: "text-red-900",
      input: "bg-red-200 text-red-900",
      button: "bg-red-600 text-white hover:bg-red-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-red-300",
      completedCard: "bg-red-300",
      circlePending: "border-red-500",
      circleCompleted: "bg-red-600",
    },
    "bg-orange-200": {
      bg: "bg-orange-100",
      text: "text-orange-900",
      input: "bg-orange-200 text-orange-900",
      button: "bg-orange-600 text-white hover:bg-orange-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-orange-300",
      completedCard: "bg-orange-300",
      circlePending: "border-orange-500",
      circleCompleted: "bg-orange-600",
    },
    "bg-pink-200": {
      bg: "bg-pink-100",
      text: "text-pink-900",
      input: "bg-pink-200 text-pink-900",
      button: "bg-pink-600 text-white hover:bg-pink-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-pink-300",
      completedCard: "bg-pink-300",
      circlePending: "border-pink-500",
      circleCompleted: "bg-pink-600",
    },
    "bg-teal-200": {
      bg: "bg-teal-100",
      text: "text-teal-900",
      input: "bg-teal-200 text-teal-900",
      button: "bg-teal-600 text-white hover:bg-teal-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-teal-300",
      completedCard: "bg-teal-300",
      circlePending: "border-teal-500",
      circleCompleted: "bg-teal-600",
    },
    "bg-lime-200": {
      bg: "bg-lime-100",
      text: "text-lime-900",
      input: "bg-lime-200 text-lime-900",
      button: "bg-lime-600 text-white hover:bg-lime-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-lime-300",
      completedCard: "bg-lime-300",
      circlePending: "border-lime-500",
      circleCompleted: "bg-lime-600",
    },
    "bg-rose-200": {
      bg: "bg-rose-100",
      text: "text-rose-900",
      input: "bg-rose-200 text-rose-900",
      button: "bg-rose-600 text-white hover:bg-rose-700",
      deleteBtn: "bg-red-500 text-white hover:bg-red-600",
      pendingCard: "bg-rose-300",
      completedCard: "bg-rose-300",
      circlePending: "border-rose-500",
      circleCompleted: "bg-rose-600",
    },
  };

const [currentTheme, setCurrentTheme] = useState(
  localStorage.getItem("themeColor") || "bg-white"
);
const [colors, setColors] = useState(themes[currentTheme]);
useEffect(() => {
  const savedTheme = localStorage.getItem("themeColor") || "bg-white";
  setCurrentTheme(savedTheme);
  setColors(themes[savedTheme]);
}, []);
const changeTheme = (newTheme: string) => {
  setCurrentTheme(newTheme);      
  setColors(themes[newTheme]);    
  localStorage.setItem("themeColor", newTheme); 
};

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    setAllTask(data);
    const completed = JSON.parse(localStorage.getItem("complete task") || "[]");
    setCompletedTasks(completed);
  }, []);

  const completeTask = (index: number) => {
    const taskToComplete = allTask[index];
    const updatedPending = allTask.filter((_, i) => i !== index);
    setAllTask(updatedPending);
    localStorage.setItem("data", JSON.stringify(updatedPending));

    const updatedCompleted = [...completedTasks, taskToComplete];
    setCompletedTasks(updatedCompleted);
    localStorage.setItem("complete task", JSON.stringify(updatedCompleted));
  };

  const undoCompleteTask = (index: number) => {
    const taskToUndo = completedTasks[index];
    const updatedCompleted = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompleted);
    localStorage.setItem("complete task", JSON.stringify(updatedCompleted));

    const updatedPending = [...allTask, taskToUndo];
    setAllTask(updatedPending);
    localStorage.setItem("data", JSON.stringify(updatedPending));
  };

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
    setTask("");
    setPriority("Low");
    setDueDate("");
  };

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
    <div className={`${colors.bg} ${changeTheme} min-h-screen w-full flex flex-col`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-6 h-16 shadow-md ${colors.bg}`}>
        <div className="flex items-center space-x-6 flex-1">
          <h1 className={`text-xl font-bold ${colors.text}`}>Dashboard</h1>
          <div className="relative flex-1 max-w-3xl ml-6 flex gap-2">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a task"
              className={`flex-1 pl-4 pr-12 py-2 rounded-full outline-none focus:ring-2 focus:ring-green-600 ${colors.input}`}
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`px-3 py-2 rounded ${colors.input}`}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={`px-3 py-2 rounded ${colors.input}`}
            />
            <button
              onClick={handleTask}
              className={`px-4 py-2 rounded-full font-bold shadow-md ${colors.button} transition-all`}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <img src="https://i.pinimg.com/1200x/a5/2c/44/a52c4459940205d17c98ab5c254689f5.jpg" alt="profile" className="w-10 h-10 rounded-full border-2 border-green-600 shadow-sm" />
          <div className="flex flex-col">
            <span className={`text-sm font-semibold ${colors.text}`}>Nency Vadadoriya</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <Card className="h-80 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className={`text-xl font-bold ${colors.text}`}>Pending Tasks</h2>
          </div>
          <div className="mt-4 flex-1 overflow-y-auto space-y-2">
            {allTask.length === 0 ? (
              <p className={`text-gray-500`}>No pending tasks</p>
            ) : (
              allTask.map((task, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${colors.pendingCard}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white cursor-pointer hover:bg-white transition-colors duration-200" onClick={() => completeTask(index)}></div>
                    <div className="flex flex-col">
                      <span className={`font-semibold ${colors.text}`}>{task.title}</span>
                      <span className={`text-sm ${colors.text}`}>
                        Priority: {task.priority} | Due: {task.dueDate || "No"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className={`px-3 py-1 rounded shadow transition-colors duration-200 text-sm ${colors.button}`}
                      onClick={() => EditTask(index)}>
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteTask(index, "pending")}
                      className={`px-3 py-1 rounded shadow text-sm ${colors.deleteBtn}`}
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
        <Card className="h-80 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className={`text-xl font-bold ${colors.text}`}>Completed Tasks</h2>
          </div>
          <div className="mt-4 flex-1 overflow-y-auto space-y-2">
            {completedTasks.length === 0 ? (
              <p className={`text-gray-500`}>No completed tasks</p>
            ) : (
              completedTasks.map((task, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${colors.completedCard}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full bg-white cursor-pointer"
                      onClick={() => undoCompleteTask(index)}
                      title="Mark as Pending"
                    ></div>
                    <span className={`line-through ${colors.text}`}>
                      {task.title} (Priority: {task.priority}, Due: {task.dueDate || "No"})
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(index, "completed")}
                    className={`px-3 py-1 rounded shadow text-sm ${colors.deleteBtn}`}
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
