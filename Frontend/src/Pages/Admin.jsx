import React from 'react'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import EmpStats from '../components/AllStats'


const Admin = () => {
  return (
    <div className="min-h-screen bg-dark-bg p-4 md:p-8 lg:p-12 font-sans antialiased selection:bg-accent-purple/30">
        <div className="max-w-7xl mx-auto">
           <Header username="Admin" />
       
        <main  className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7">
                <TaskCard></TaskCard>
            </div>

            <div className="lg:col-span-5">
                <EmpStats></EmpStats>
            </div>
        
        </main>

        </div>
    </div>
  )
}

export default Admin
