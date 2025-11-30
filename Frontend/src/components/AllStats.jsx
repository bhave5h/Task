import React from 'react'
import { 
  FiUser, 
  FiCalendar, 
  FiTag, 
  FiFileText, 
  FiUsers, 
  FiCheckCircle, 
  FiXCircle, 
  FiActivity, 
  FiPlusCircle 
} from 'react-icons/fi';

const employeeData = [
  { id: 1, name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=11', new: 5, completed: 12, failed: 1, active: 4 },
  { id: 2, name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?img=25', new: 2, completed: 8, failed: 0, active: 6 },
  { id: 3, name: 'Kenji Tanaka', avatar: 'https://i.pravatar.cc/150?img=15', new: 8, completed: 15, failed: 3, active: 2 },
  { id: 4, name: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?img=47', new: 3, completed: 7, failed: 0, active: 5 },
];

const EmpStats = () => {
  return (
<div className="card-bg p-6 md:p-8 rounded-[2rem] shadow-xl shadow-black/20 border border-gray-800/30 h-full">
       <div className="flex items-center justify-between mb-8">
        <div>
             <h2 className="text-xl font-bold text-white mb-1">Team Performance</h2>
             <p className="text-dark-muted text-sm">Overview of employee task status.</p>
        </div>
        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
            <FiActivity size={24} />
        </div>
      </div>

      <div id="allstats" className="overflow-x-auto relative">
        <table className="w-full text-left text-dark-muted whitespace-nowrap">
          <thead className="text-xs uppercase bg-dark-input/50 text-gray-400 font-semibold border-b border-gray-800">
            <tr>
              <th scope="col" className="px-4 py-4 rounded-tl-xl">Emp Name</th>
              <th scope="col" className="px-4 py-4 text-center">New</th>
              <th scope="col" className="px-4 py-4 text-center">Completed</th>
              <th scope="col" className="px-4 py-4 text-center">Failed</th>
              <th scope="col" className="px-4 py-4 text-center rounded-tr-xl">Active</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((emp) => (
              <tr key={emp.id} className="border-b border-gray-800/50 hover:bg-dark-input/30 transition-colors duration-200">
                <th scope="row" className="px-4 py-4 font-medium text-white flex items-center space-x-3">
                  <img src={emp.avatar} alt={emp.name} className="w-8 h-8 rounded-full" />
                  <span>{emp.name}</span>
                </th>
                <td className="px-4 py-4 text-center">
                    <span className="px-3 py-1 text-indigo-500 text-sm font-medium">{emp.new}</span>
                </td>
                <td className="px-4 py-4 text-center">
                    <span className="px-3 py-1 text-green-300 text-sm font-medium">{emp.completed}</span>
                </td>
                 <td className="px-4 py-4 text-center">
                    <span className={`px-3 py-1 text-sm font-medium flex items-center justify-center gap-1 ${emp.failed > 0 ? ' text-red-400' : 'text-gray-500'}`}>
                        {emp.failed > 0 } {emp.failed}
                    </span>
                </td>
                <td className="px-4 py-4 text-center">
                    <span className="px-3 py-1 text-yellow-300 text-sm font-medium">{emp.active}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <div className="mt-6 text-center text-sm text-dark-muted cursor-pointer hover:text-accent-purple transition-colors">
            View all employees -
       </div>
    </div>
  )
}

export default EmpStats
