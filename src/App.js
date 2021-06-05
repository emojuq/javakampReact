
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

//ana component görevi görür
//npm start uygulamamızı başlatmaya yarar

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
      <Dashboard></Dashboard>
      </Container>   
        
    </div>
  );
}

export default App;
