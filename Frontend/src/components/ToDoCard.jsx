// import React from 'react'
// import { FiLogOut, FiCalendar, FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

// const ToDoCard = ({ data }) => {
//     return (
//         <div className="card-bg border border-gray-800/50 rounded-[2rem] p-6 flex flex-col justify-between h-full shadow-xl shadow-black/10">
//             <div>
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-red-500 text-xs px-3 py-1 rounded-full text-white font-medium">
//                         {data.category}
//                     </span>
//                     <span className="text-dark-muted text-xs flex items-center gap-1">
//                         <FiCalendar /> {data.date}
//                     </span>
//                 </div>
                
//                 <h2 className="text-2xl font-bold text-white mb-2">{data.title}</h2>
//                 <p className="text-dark-muted text-sm leading-relaxed mb-6">
//                     {data.description}
//                 </p>
//             </div>

//             <div className="flex gap-3 mt-auto">
//                 <button className="flex-1 py-2 px-4 rounded-xl bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500 hover:text-white transition-all duration-300">
//                     Mark Completed
//                 </button>
//                 <button className="flex-1 py-2 px-4 rounded-xl bg-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500 hover:text-white transition-all duration-300">
//                     Mark Failed
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ToDoCard;
import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const ToDoCard = ({ data, onComplete, onFail }) => {

    // Dynamic color for status badge
    const getStatusColor = (status) => {
        if (status === "completed") return "bg-green-600 text-white";
        if (status === "failed") return "bg-red-600 text-white";
        if (status === "active") return "bg-yellow-600 text-white";
        return "bg-blue-600 text-white"; // new
    };

    return (
        <div className="card-bg border border-gray-800/50 rounded-[2rem] p-6 flex flex-col justify-between h-full shadow-xl shadow-black/10">

            <div>
                {/* Category + Date */}
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-red-500 text-xs px-3 py-1 rounded-full text-white font-medium">
                        {data.category}
                    </span>

                    <span className="text-dark-muted text-xs flex items-center gap-1">
                        <FiCalendar /> {data.due_date}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-2">
                    {data.title}
                </h2>

                {/* Description */}
                <p className="text-dark-muted text-sm leading-relaxed mb-6">
                    {data.description}
                </p>

                {/* Status */}
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(data.status)}`}>
                    {data.status.toUpperCase()}
                </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">

                <button
                    className="flex-1 py-2 px-4 rounded-xl bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500 hover:text-white transition-all duration-300"
                    onClick={() => onComplete(data.id)}
                >
                    Mark Completed
                </button>

                <button
                    className="flex-1 py-2 px-4 rounded-xl bg-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500 hover:text-white transition-all duration-300"
                    onClick={() => onFail(data.id)}
                >
                    Mark Failed
                </button>

            </div>

        </div>
    );
};

export default ToDoCard;
