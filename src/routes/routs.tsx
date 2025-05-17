// import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
// import Experince from '../components/Experince';

function Routing() {
    return (
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/skills" element={<Skills />} />
                {/* <Route path="/professional-experince" element={<Experince />} /> */}
            </Routes>
    )
}

export default Routing