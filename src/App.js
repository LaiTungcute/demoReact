import { Alert } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Style from './style/style';

function App() {
  const [hidden, unhidden] = useState(true);

  return (
    <div className="App">
      <Style hidden = {hidden} unhidden={unhidden} />
      <Alert severity="success">This is an error alert — check it out!</Alert>
    </div>
  );
}

export default App;