import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css"


import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Footer />
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);