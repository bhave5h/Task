import React from "react";

const StatsCard = ({ number, label, color }) => {
    const bgColors = {
        indigo: 'bg-indigo-500',
        green: 'bg-green-300',
        yellow: 'bg-yellow-300 ',
        red: 'bg-red-400',
    };
    
    return (
        <div className={`p-6 rounded-2xl ${bgColors[color]} shadow-lg`}>
            <h2 className="bg-card text-4xl font-bold text-black mb-2">{number}</h2>
            <h3 className="text-2xl font-bold text-black">{label}</h3>
        </div>
    );
};

export default StatsCard;