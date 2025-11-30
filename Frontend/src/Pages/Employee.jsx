import React from 'react'
import Header from '../components/Header'
import StatsCard from '../components/StatsCard'
import ToDoCard from '../components/ToDoCard';

const taskStats = {
  newTask: 1,
  completed: 12,
  active: 4,
  failed: 1
};

const myTasks = [
  {
    id: 1,
    category: 'Design',
    date: '27 Sep, 2024',
    title: 'Redesign Login Page',
    description: 'Create a modern, dark-themed login interface matching the new brand guidelines. Ensure mobile responsiveness.',
    priority: 'High',
    status: 'active'
  },
  {
    id: 2,
    category: 'Development',
    date: '28 Sep, 2024',
    title: 'Fix API Integration',
    description: 'The user profile endpoint is returning 500 errors on specific payloads. Debug and fix the controller logic.',
    priority: 'Medium',
    status: 'new'
  },
  {
    id: 3,
    category: 'Content',
    date: '30 Sep, 2024',
    title: 'Write Blog Post',
    description: 'Draft a 1000-word article about the new features released in version 2.0. Focus on the AI capabilities.',
    priority: 'Low',
    status: 'new'
  }
];


const Employee = () => {
  return (
    <div className="min-h-screen bg-dark-bg p-4 md:p-8 lg:p-12 font-sans antialiased ">
        <div className="max-w-7xl mx-auto">
            <Header username="emp_name"/>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                <StatsCard number={taskStats.newTask} label="New Task" color="indigo" />
                <StatsCard number={taskStats.completed} label="Completed" color="green" />
                <StatsCard number={taskStats.active} label="Active Task" color="yellow" />
                <StatsCard number={taskStats.failed} label="Failed Task" color="red" />
            </section>

            <section className="mt-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Today's Tasks</h2>
                    <span className="text-dark-muted text-sm">{new Date().toDateString()}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
                    {myTasks.map((task) => (
                        <ToDoCard key={task.id} data={task} />
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}

export default Employee
