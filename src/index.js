import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bio from './Bio';
import Music from './Music';
import Gallery from './Gallery';
import Contact from './Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/bio" element={<Bio/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<App />}/>
            </Routes>
        </Router>
    </React.StrictMode>
)
