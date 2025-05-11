// import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
    )
}

export default Routing