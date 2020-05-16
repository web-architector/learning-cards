import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderBlock from "./components/HeaderBlock";


const App = () => {
    return (
        <React.Fragment>
            <HeaderBlock/>
        </React.Fragment>
    )
};


ReactDOM.render(<App/>, document.getElementById('root'));
