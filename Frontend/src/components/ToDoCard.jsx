import React from 'react'
import { FiLogOut, FiCalendar, FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

const ToDoCard = ({ data }) => {
    return (
        <div className="card-bg border border-gray-800/50 rounded-[2rem] p-6 flex flex-col justify-between h-full shadow-xl shadow-black/10">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-red-500 text-xs px-3 py-1 rounded-full text-white font-medium">
                        {data.category}
                    </span>
                    <span className="text-dark-muted text-xs flex items-center gap-1">
                        <FiCalendar /> {data.date}
                    </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">{data.title}</h2>
                <p className="text-dark-muted text-sm leading-relaxed mb-6">
                    {data.description}
                </p>
            </div>

            <div className="flex gap-3 mt-auto">
                <button className="flex-1 py-2 px-4 rounded-xl bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500 hover:text-white transition-all duration-300">
                    Mark Completed
                </button>
                <button className="flex-1 py-2 px-4 rounded-xl bg-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500 hover:text-white transition-all duration-300">
                    Mark Failed
                </button>
            </div>
        </div>
    );
};

export default ToDoCard;
