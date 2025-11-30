// import React from 'react'
// import Admin from './Pages/Admin'
// import Employee from './Pages/Employee'
// import TaskCard from './components/TaskCard'
// import Login from './Pages/Login'


// const App = () => {
//   return (
//     <div>
//       <Login />
//       <Admin />
//       <Employee />

//     </div>
//   )
// }

// export default App
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Employee from './Pages/Employee';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/admin" element={<Admin />} />

      <Route path="/employee" element={<Employee />} />

    </Routes>
  );
};

export default App;
