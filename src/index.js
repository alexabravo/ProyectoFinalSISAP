import React from "react";
import ReactDOM from "react-dom"; 
import App from './componentes/App';

import "./index.css";

const StartComponent = () => {
    return <h1>New React App</h1>;  
}

ReactDOM.render(<App />, document.getElementById('root'));