import React from 'react';
import './App.css';
import {useMediaQuery} from "react-responsive";

const App: React.FC = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1224px)'});

  return (
    <div className="App">
      {isMobile ? <div>Mobile</div> : <div>Not Mobile</div>}
    </div>
  );
};


export default App;
