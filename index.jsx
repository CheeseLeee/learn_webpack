import React from 'react'
import ReactDOM from 'react-dom';
import './src/style/index.css'
const container = document.getElementById('app');

function formatName(user) {
    console.log('format name')
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const App = () => {
    return(
        <h1>Hellow React and {formatName(user)}</h1>
    )
}


const root = ReactDOM.createRoot(container);
root.render(<App/>)