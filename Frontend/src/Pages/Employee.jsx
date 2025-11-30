import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import ToDoCard from '../components/ToDoCard';

const Employee = () => {

  const [tasks, setTasks] = useState([]);

  const [stats, setStats] = useState({
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  });

  // TEMP username 
  const username = "Bhavesh"; 

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/tasks/${username}`)
      .then(res => res.json())
      .then((data) => {
        console.log("Fetched Tasks:", data);
        setTasks(data);

        const newStats = { newTask: 0, completed: 0, active: 0, failed: 0 };
        data.forEach(task => {
          if (task.status === "new") newStats.newTask++;
          if (task.status === "completed") newStats.completed++;
          if (task.status === "active") newStats.active++;
          if (task.status === "failed") newStats.failed++;
        });
        setStats(newStats);
      })
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);


  return (
    <div className="min-h-screen bg-dark-bg p-4 md:p-8 lg:p-12 font-sans antialiased">
      
      <div className="max-w-7xl mx-auto">
        
        <Header username={username} />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <StatsCard number={stats.newTask} label="New Task" color="indigo" />
          <StatsCard number={stats.completed} label="Completed" color="green" />
          <StatsCard number={stats.active} label="Active Task" color="yellow" />
          <StatsCard number={stats.failed} label="Failed Task" color="red" />
        </section>

        <section className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Your Tasks</h2>
            <span className="text-dark-muted text-sm">
              {new Date().toDateString()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <ToDoCard key={task.id} data={task} />
              ))
            ) : (
              <p className="text-gray-400">No tasks assigned.</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Employee;
