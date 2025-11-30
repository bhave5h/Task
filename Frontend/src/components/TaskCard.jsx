import React, { useState, useEffect} from 'react';

import {
  FiUser,
  FiCalendar,
  FiTag,
  FiFileText,
  FiPlusCircle
} from 'react-icons/fi';

const TaskCard = () => {

  const [employees, setEmployees] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:5000/employees")
    .then(res => res.json())
    .then(data => setEmployees(data))
    .catch(err => console.log(err));
}, []);

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: title,
      description: description,
      category: category,
      assigned_to: assignedTo,
      due_date: dueDate,
      created_by: "admin@gmail.com" // static for now
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/create-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      alert(data.message);

      // clearing form
      setTitle("");
      setDueDate("");
      setAssignedTo("");
      setCategory("");
      setDescription("");

    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
  };


  return (
    <div className="card-bg p-6 md:p-8 rounded-[2rem] shadow-xl shadow-black/20 border border-gray-800/30 h-full">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Assign New Task</h2>
          <p className="text-dark-muted text-sm">Create and allocate work to your team.</p>
        </div>
        <div className="p-3 bg-accent-purple/20 rounded-xl text-accent-purple">
          <FiPlusCircle size={24} />
        </div>
      </div>

      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="mb-4">
            <label className="block text-dark-muted text-sm font-medium mb-2">
              Task Title
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <FiFileText />
              </div>
              <input 
                type="text" 
                placeholder="e.g., Redesign Homepage" 
                className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-dark-muted text-sm font-medium mb-2">
              Due Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <FiCalendar />
              </div>
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="mb-4">
            <label className="block text-dark-muted text-sm font-medium mb-2"> Assign To </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
              <FiUser />
            </div>
            <select
              className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Select Employee</option>
              {employees.map((emp, idx) => (
                <option key={idx} value={emp.username}>
                  {emp.username}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
            <label className="block text-dark-muted text-sm font-medium mb-2">
              Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <FiTag />
              </div>
              <input
                type="text"
                placeholder="e.g., Design, Development"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-dark-muted text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            rows="4"
            placeholder="Detailed task instructions..."
            className="w-full pl-4 pr-4 py-3 bg-gray-500 text-white rounded-xl"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className="mt-4 text-white font-semibold py-3 px-6 rounded-xl shadow-lg bg-gray-500">
          Create Task
        </button>

      </form>
    </div>
  );
};

export default TaskCard;
