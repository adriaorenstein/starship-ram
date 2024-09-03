import React from 'react';
import { createRoot } from 'react-dom/client';

import Nav_Bar from './components/Nav_Bar';
import Tut_Nav_Bar from './components/Tut_Nav_Bar';
import Home from './components/Home';

import _01_01_Intro from './components/Tutorial/01_Introduction/_01_01_Intro';
import _02_01_Intro from './components/Tutorial/02_Simplest_Program/_02_01_Intro';
import _02_02_Download_IDE from './components/Tutorial/02_Simplest_Program/_02_02_Download_IDE';
import _02_03_Create_Project from './components/Tutorial/02_Simplest_Program/_02_03_Create_Project';
import _02_04_Website_Overview from './components/Tutorial/02_Simplest_Program/_02_04_Website_Overview';
import _02_05_Package_Manager from './components/Tutorial/02_Simplest_Program/_02_05_Package_Manager';
import _02_06_Server from './components/Tutorial/02_Simplest_Program/_02_06_Server';
import _02_06C_Server_Code from './components/Tutorial/02_Simplest_Program/_02_06C_Server_Code';
import _02_07_Index_html from './components/Tutorial/02_Simplest_Program/_02_07_Index_html';
import _02_07C_Index_html_Code from './components/Tutorial/02_Simplest_Program/_02_07C_Index_html_Code';

import References from './components/Tutorial/Extra_Content/References';

import { Route, Routes, BrowserRouter, useLocation, Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <Nav_Bar />
            {/* {useLocation().pathname != "/"
                ? <Tut_Nav_Bar />
                : <div></div>
            } */}
            <Tut_Nav_Bar />

            <Routes>
                <Route path='/' element={<_01_01_Intro />} />
                <Route path='tutorial/introduction' element={<_01_01_Intro />} />
                <Route path='tutorial/simplest-pro' element={<_02_01_Intro />} />
                <Route path='tutorial/simplest-pro/02' element={<_02_02_Download_IDE />} />
                <Route path='tutorial/simplest-pro/03' element={<_02_03_Create_Project />} />
                <Route path='tutorial/simplest-pro/04' element={<_02_04_Website_Overview />} />
                <Route path='tutorial/simplest-pro/05' element={<_02_05_Package_Manager />} />
                <Route path='tutorial/simplest-pro/06' element={<_02_06_Server />} />
                <Route path='tutorial/simplest-pro/06C' element={<_02_06C_Server_Code />} />
                <Route path='tutorial/simplest-pro/07' element={<_02_07_Index_html />} />
                <Route path='tutorial/simplest-pro/07C' element={<_02_07C_Index_html_Code />} />

                <Route path='tutorial/references' element={<References />} />
            </Routes>
        </div>
    )
}

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);