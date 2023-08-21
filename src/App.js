
// import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Others from "./Components/Others";

function App(){
    return (
        <> 
        <div>
            <Navbar/>
        </div>
        <div>
             <About />
        </div>
        <div>
            <Others />
        </div>
        </>
    ); 
}

export default App;
