import '../styles/App.css';
import React from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';

function App() {
    return(
        <React.Fragment>
            <Header/>
            <Main/>
        </React.Fragment>
    );
}

export default App;