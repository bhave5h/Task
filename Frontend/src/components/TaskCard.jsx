import React from 'react';

import {
  FiUser,
  FiCalendar,
  FiTag,
  FiFileText,
  FiPlusCircle
} from 'react-icons/fi';

const TaskCard = () => {
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

      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="mb-4">
            <label className="block text-dark-muted text-sm font-medium mb-2">
              Task Title
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <FiFileText />
                </div>
              <input type="text" placeholder="e.g., Redesign Homepage" className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500"/>
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

              <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500 "/>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="mb-4">
            <label className="block text-dark-muted text-sm font-medium mb-2">
              Assign To
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <FiUser />
              </div>
              <input
                type="text"
                placeholder="Select Employee"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500"
              />
            </div>
          </div>

          {/* Category */}
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
            className="w-full pl-4 pr-4 py-3 bg-dark-input border border-gray-800/50 rounded-xl text-white bg-gray-500"
          ></textarea>
        </div>

        <button className=" mt-4 text-white font-semibold py-3 px-6 rounded-xl shadow-lg  bg-gray-500">
          Create Task
        </button>

      </form>
    </div>
  );
};

export default TaskCard;
