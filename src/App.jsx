import React from "react";
import Home from "./Home.jsx";
import Image from "./Image.jsx"
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/image" element={<Image/>}/>
        </Routes>
    );
}

export default App
