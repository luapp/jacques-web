import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bio from './Bio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/bio" element={<Bio/>}/>
                <Route path="/music" element={<App/>}/>
                <Route path="/gallery" element={<App/>}/>
                <Route path="/contact" element={<App/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
)
