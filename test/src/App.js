import React, { useState ,createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/bootstrap-grid.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Layout from './pages/layout';
import Login from './pages/login';

export const FormDataContext = createContext(null);

function App() {

  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{formData, setFormData}}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<SignUp />} />
            <Route path="Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </FormDataContext.Provider>
  );
}
export default App
