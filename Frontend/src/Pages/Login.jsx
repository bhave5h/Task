import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";
import Dither from "../components/Dither";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temp login logic (no backend)
    if (email === "admin@gmail.com") {
      navigate("/admin");
    } else if (email === "emp1@gmail.com") {
      navigate("/employee");
    } else {
      alert("Invalid email for demo login!");
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center p-4 ">

    <div className="absolute inset-0 -z-10">
    <Dither
    waveColor={[0.7, 0.7, 0.7]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.1}
    colorNum={4}
    waveAmplitude={0.3}
    waveFrequency={3}
    waveSpeed={0.05}
    />
    </div>
      
    <div className="card-bg w-full max-w-md p-6 md:p-8 rounded-[2rem] shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Login</h2>
          <div className="p-3 bg-accent-purple/20 rounded-xl text-accent-purple">
            <BsPersonBoundingBox size={24}/>
          </div>
        </div>

    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label className="block text-dark-muted text-sm font-medium mb-2"> Email </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <MdEmail />
              </div>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
      </div>

      <div>
        <label className="block text-dark-muted text-sm font-medium mb-2"> Password </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-dark-muted pointer-events-none">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-white bg-gray-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-600 transition"> Login 
          </button>
    </form>
      </div>
    </div>
    
  );
};

export default Login;
